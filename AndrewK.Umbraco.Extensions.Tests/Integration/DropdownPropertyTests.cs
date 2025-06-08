using AndrewK.Umbraco.Extensions.Tests.Abstractions;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;

namespace AndrewK.Umbraco.Extensions.Tests.Integration;

public class DropdownPropertyTests(
    SharedWebApplicationFactory sharedFactory) : IntegrationTestBase(sharedFactory)
{
    private const string PropertyAlias = "testDropdown";

    public static TheoryData<bool, List<KeyValuePair<string, string>>, string, List<string>> TestCases => new()
    {
        {
            false,
            [
                new KeyValuePair<string, string>("key1", "value1"),
                new KeyValuePair<string, string>("key2", "value2"),
                new KeyValuePair<string, string>("key3", "value3")
            ],
            string.Empty,
            ["key2"]
        },
        {
            true,
            [
                new KeyValuePair<string, string>("key1", "value1"),
                new KeyValuePair<string, string>("key2", "value2"),
                new KeyValuePair<string, string>("key3", "value3")
            ],
            string.Empty,
            ["key2", "key3"]
        }
    };

    [Theory]
    [MemberData(nameof(TestCases))]
    public async Task Can_Create_Content_And_Read_Custom_Property(bool multiple,
        ICollection<KeyValuePair<string, string>> items, string defaultValue, List<string> values)
    {
        #region Arrange

        var contentService = GetService<IContentService>();
        var umbracoContextFactory = GetService<IUmbracoContextFactory>();

        #endregion

        #region Act

        // creating data type
        var dataTypeSaveAttempt = await DataTypeCreator.CreateAsync(
            DataEditor(),
            ValueStorageType.Ntext,
            "AndrewK.Umbraco.Dropdown",
            new Dictionary<string, object>
            {
                ["multiple"] = multiple,
                ["items"] = items,
                ["default"] = defaultValue
            }
        );
        Assert.True(dataTypeSaveAttempt.Success, "Data type should be saved successfully");
        Assert.NotNull(dataTypeSaveAttempt.Result);

        // creating content type
        var contentTypeSaveAttempt = await ContentTypeCreator.CreateAsync(
            new PropertyType(ShortStringHelper, dataTypeSaveAttempt.Result, PropertyAlias)
            {
                Name = PropertyAlias + " Property"
            }
        );
        Assert.True(contentTypeSaveAttempt.Success, "Content type should be saved successfully");
        Assert.NotNull(contentTypeSaveAttempt.Result);

        // creating a content node of the content type with the value set
        var content = new Content("Test Dropdown Content", -1, contentTypeSaveAttempt.Result);
        content.SetValue(PropertyAlias, JsonConvert.SerializeObject(values));
        var saveResult = contentService.Save(content);
        var publishResult = contentService.Publish(content, ["*"]);

        // retrieving the content node
        using var contextReference = umbracoContextFactory.EnsureUmbracoContext();
        var retrievedContent = await contextReference.UmbracoContext.Content.GetByIdAsync(content.Id);
        ICollection<string?> retrievedValues = multiple
            ? retrievedContent?.Value<IEnumerable<string?>>(PropertyAlias)?.ToList() ?? []
            : [retrievedContent?.Value<string>(PropertyAlias)];

        #endregion

        #region Assert

        Assert.True(saveResult.Success, "Content should be saved successfully");
        Assert.True(publishResult.Success, "Content should be published successfully");
        Assert.NotNull(retrievedContent);
        Assert.NotNull(retrievedValues);
        foreach (var (index, value) in values.Index())
        {
            Assert.Equal(value, retrievedValues.ElementAt(index));
        }

        #endregion
    }

    private IDataEditor DataEditor() =>
        //TODO: consider defining a custom IDataEditor
        GetService<PropertyEditorCollection>().FirstOrDefault(x => x.Alias == "Umbraco.Plain.Json") ??
        throw new InvalidOperationException("No suitable editor found for dictionary data type");
}