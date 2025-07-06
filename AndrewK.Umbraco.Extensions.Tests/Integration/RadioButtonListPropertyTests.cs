using AndrewK.Umbraco.Extensions.RadioButtonList.PropertyValueConverters;
using AndrewK.Umbraco.Extensions.Tests.Abstractions;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;

namespace AndrewK.Umbraco.Extensions.Tests.Integration;

public class RadioButtonListPropertyTests(SharedWebApplicationFactory sharedFactory)
    : IntegrationTestBase(sharedFactory)
{
    private const string PropertyAlias = "testRadioButtonList";

    public static TheoryData<List<KeyValuePair<string, string>>, string?> TestCases => new()
    {
        {
            [
                new KeyValuePair<string, string>("key1", "value1"),
                new KeyValuePair<string, string>("key2", "value2")
            ],
            null
        },
        {
            [
                new KeyValuePair<string, string>("key1", "value1"),
                new KeyValuePair<string, string>("key2", "value2")
            ],
            string.Empty
        },
        {
            [
                new KeyValuePair<string, string>("key1", "value1"),
                new KeyValuePair<string, string>("key2", "value2")
            ],
            "key1"
        }
    };

    [Theory]
    [MemberData(nameof(TestCases))]
    public async Task Can_Create_Content_And_Read_Custom_Property(ICollection<KeyValuePair<string, string>> items,
        string? value)
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
            AndrewKRadioButtonListPropertyValueConverter.EditorUiAlias,
            new Dictionary<string, object>
            {
                ["items"] = items,
                ["default"] = string.Empty // no reason to set default since it's purely FE logic
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
        var content = new Content("Test CheckBoxList Content", -1, contentTypeSaveAttempt.Result);
        content.SetValue(PropertyAlias, value);
        var saveResult = contentService.Save(content);
        var publishResult = contentService.Publish(content, ["*"]);
        
        // retrieving the content node
        using var contextReference = umbracoContextFactory.EnsureUmbracoContext();
        var retrievedContent = await contextReference.UmbracoContext.Content.GetByIdAsync(content.Id);
        var retrievedValue = retrievedContent?.Value<string>(PropertyAlias);

        #endregion

        #region Assert

        Assert.True(saveResult.Success, "Content should be saved successfully");
        Assert.True(publishResult.Success, "Content should be published successfully");
        Assert.NotNull(retrievedContent);

        switch (value, retrievedValue)
        {
            case (null, null):
                Assert.True(true);
                break;
            case (not null, not null):
                Assert.Equal(value, retrievedValue);
                break;
            default:
                Assert.Fail("Values should be equal, but were not");
                break;
        }

        #endregion
    }
    
    private IDataEditor DataEditor() =>
        //TODO: consider defining a custom IDataEditor
        GetService<PropertyEditorCollection>().FirstOrDefault(x => x.Alias == "Umbraco.Plain.Json") ??
        throw new InvalidOperationException("No suitable editor found for radio-button-list data type");
}