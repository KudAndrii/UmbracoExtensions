using AndrewK.Umbraco.Extensions.Dictionary.PropertyValueConverters;
using AndrewK.Umbraco.Extensions.Tests.Abstractions;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;

namespace AndrewK.Umbraco.Extensions.Tests.Integration;

public class DictionaryPropertyTests(
    SharedWebApplicationFactory sharedFactory) : IntegrationTestBase(sharedFactory)
{
    private const string PropertyAlias = "testDictionary";

    public static TheoryData<int, int, List<KeyValuePair<string, string>>?> TestCases => new()
    {
        {
            0,
            0,
            [
                new KeyValuePair<string, string>("key1", "value1"),
                new KeyValuePair<string, string>("key2", "value2"),
                new KeyValuePair<string, string>("key3", "value3")
            ]
        },
        {
            0,
            0,
            []
        },
        {
            0,
            0,
            null
        }
    };

    [Theory]
    [MemberData(nameof(TestCases))]
    public async Task Can_Create_Content_And_Read_Custom_Property(int min, int max,
        ICollection<KeyValuePair<string, string>>? values)
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
            AndrewKDictionaryPropertyValueConverter.EditorUiAlias,
            //TODO: consider implementing IDataValidator to validate min, max and values itself
            new Dictionary<string, object>
            {
                ["min"] = min,
                ["max"] = max
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
        var content = new Content("Test Dictionary Content", -1, contentTypeSaveAttempt.Result);
        var settings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };
        content.SetValue(PropertyAlias, JsonConvert.SerializeObject(values, settings));
        var saveResult = contentService.Save(content);
        var publishResult = contentService.Publish(content, ["*"]);

        // retrieving the content node
        using var contextReference = umbracoContextFactory.EnsureUmbracoContext();
        var retrievedContent = await contextReference.UmbracoContext.Content.GetByIdAsync(content.Id);
        var retrievedValues = retrievedContent?.Value<ICollection<KeyValuePair<string, string>>>(PropertyAlias);

        #endregion

        #region Assert

        Assert.True(saveResult.Success, "Content should be saved successfully");
        Assert.True(publishResult.Success, "Content should be published successfully");
        Assert.NotNull(retrievedContent);
        Assert.Equal(values?.Count, retrievedValues?.Count);

        if (values != null && retrievedValues != null)
        {
            foreach (var (index, kvp) in values.Index())
            {
                Assert.Equal(kvp.Value, retrievedValues.ElementAt(index).Value);
            }
        }

        #endregion
    }

    private IDataEditor DataEditor() =>
        //TODO: consider defining a custom IDataEditor
        GetService<PropertyEditorCollection>().FirstOrDefault(x => x.Alias == "Umbraco.Plain.Json") ??
        throw new InvalidOperationException("No suitable editor found for dictionary data type");
}