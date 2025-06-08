using AndrewK.Umbraco.Extensions.Tests.Abstractions;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;

namespace AndrewK.Umbraco.Extensions.Tests.Integration;

public class DropdownPropertyTests : IntegrationTestBase
{
    [Fact]
    public async Task Can_Create_Content_And_Read_Custom_Property()
    {
        // arrange
        var userService = GetService<IUserService>();
        var adminUser = userService.GetUserById(-1) ??
                        throw new InvalidOperationException("Admin user not found");
        // var userGroupService = GetService<IUserGroupService>();
        // var testUser = userService.CreateUserWithIdentity("testUser", "test.user@mail");
        // UserGroup adminUserGroup = await userGroupService.GetAsync("admin") as UserGroup ??
        //                            throw new InvalidOperationException("Admin user group not found");
        // testUser.AddGroup(adminUserGroup);
        // userService.Save(testUser);
        var propertyAlias = "testDictionary";
        var configurationEditorJsonSerializer = GetService<IConfigurationEditorJsonSerializer>();
        var dataTypeService = GetService<IDataTypeService>();
        var contentTypeService = GetService<IContentTypeService>();
        var contentService = GetService<IContentService>();
        var umbracoContextFactory = GetService<IUmbracoContextFactory>();
        var propertyEditors = GetService<PropertyEditorCollection>();
        var editor = propertyEditors.FirstOrDefault(x => x.Alias == "AndrewK.Umbraco.Dictionary") ??
                     propertyEditors.FirstOrDefault(x => x.Alias == "Umbraco.Plain.Json") ??
                     throw new InvalidOperationException("No suitable editor found for dictionary testing");
        var dataTypeSaveAttempt = await dataTypeService.CreateAsync(new DataType(editor, configurationEditorJsonSerializer)
        {
            Name = "Test Dictionary Data Type",
            DatabaseType = ValueStorageType.Ntext,
            ConfigurationData = new Dictionary<string, object>
            {
                ["min"] = 0,
                ["max"] = 4
            },
            EditorUiAlias = "AndrewK.Umbraco.Dictionary"
        }, adminUser.Key);
        var propertyType = new PropertyType(ShortStringHelper, dataTypeSaveAttempt.Result, propertyAlias)
        {
            Name = "Test Dictionary",
            Description = "Test dictionary property",
            Mandatory = false,
            SortOrder = 0,
            //DataTypeId = dataType.Id
        };
        var tab = new PropertyGroup(true)  // or true, depending on your context
        {
            Name = "Content",
            Alias = "content",
            SortOrder = 0,
            Type = PropertyGroupType.Tab,  // or whatever group type you want
            PropertyTypes = new PropertyTypeCollection(true, [propertyType])
        };
        var contentType = new ContentType(ShortStringHelper, -1)
        {
            Alias = "testDocTypeDictionary" + new Random().Next(),
            Name = "Test Document Type Dictionary" + new Random().Next(),
            Description = "Test content type for dictionary testing",
            Icon = "icon-document",
            AllowedAsRoot = true,
            PropertyGroups = new PropertyGroupCollection([tab])
        };
        await contentTypeService.CreateAsync(contentType, adminUser.Key);

        // act
        var content = ContentCreator.Create("Test Dictionary Content", contentType);
        var value = new List<KeyValuePair<string, string>>
        {
            new("key1", "value1"),
            new("key2", "value2"),
            new("key3", "value3")
        };
        var settings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };
        content.SetValue(propertyAlias, JsonConvert.SerializeObject(value, settings));
        var saveResult = contentService.Save(content);
        var publishResult = contentService.Publish(content, ["*"]);

        using var contextReference = umbracoContextFactory.EnsureUmbracoContext();

        // assert
        Assert.True(saveResult.Success, "Content should be saved successfully");
        Assert.True(publishResult.Success, "Content should be published successfully");
        
        var retrievedContent = await contextReference.UmbracoContext.Content.GetByIdAsync(content.Id);
        Assert.NotNull(retrievedContent);
        
        var retrievedValue = retrievedContent.Value<ICollection<KeyValuePair<string, string>>>(propertyAlias);
        Assert.NotNull(retrievedValue);
        Assert.Equal(3, retrievedValue.Count);
        
        var dictionaryValue = retrievedValue.ToDictionary(kvp => kvp.Key, kvp => kvp.Value);
        Assert.Equal("value1", dictionaryValue["key1"]);
        Assert.Equal("value2", dictionaryValue["key2"]);
        Assert.Equal("value3", dictionaryValue["key3"]);
    }
}