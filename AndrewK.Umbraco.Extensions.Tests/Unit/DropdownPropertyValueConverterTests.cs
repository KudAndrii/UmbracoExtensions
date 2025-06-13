using AndrewK.Umbraco.Extensions.Dropdown.PropertyValueConverters;
using Moq;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;

namespace AndrewK.Umbraco.Extensions.Tests.Unit;

public class DropdownPropertyValueConverterTests
{
    [Theory]
    [InlineData(AndrewKDropdownPropertyValueConverter.EditorUiAlias, true)]
    [InlineData("AnyOtherEditorAlias", false)]
    public void Converter_Matching_Editor_Ui_Alias(string editorUiAlias, bool expectedResult)
    {
        // Arrange
        var mockPropertyType = new Mock<IPublishedPropertyType>();
        mockPropertyType.Setup(p => p.EditorUiAlias).Returns(editorUiAlias);

        var converter = new AndrewKDropdownPropertyValueConverter(Mock.Of<IJsonSerializer>());

        // Act
        var result = converter.IsConverter(mockPropertyType.Object);

        // Assert
        Assert.Equal(expectedResult, result);
    }

    [Theory]
    [InlineData(typeof(ICollection<string>), true, true)]
    [InlineData(typeof(IEnumerable<string>), true, true)]
    [InlineData(typeof(List<string>), true, false)]
    [InlineData(typeof(string), false, true)]
    [InlineData(typeof(string), true, false)]
    public void Converter_Returns_Correct_Value_Type(Type valueType, bool isMultiple, bool expectedResult)
    {
        // Arrange
        object? propertyConfig = new Dictionary<string, object?>
        {
            ["multiple"] = isMultiple
        };
        var publishedDataType = new PublishedDataType(
            id: 123,
            editorAlias: "Umbraco.Plain.Json",
            editorUiAlias: AndrewKDropdownPropertyValueConverter.EditorUiAlias,
            lazyConfiguration: new Lazy<object?>(propertyConfig)
        );
        var mockPublishedContentTypeFactory = new Mock<IPublishedContentTypeFactory>();
        mockPublishedContentTypeFactory.Setup(x => x.GetDataType(publishedDataType.Id)).Returns(publishedDataType);
        var propertyType = new PublishedPropertyType("", publishedDataType.Id, true,
            ContentVariation.Nothing, new PropertyValueConverterCollection(() => []), new PublishedModelFactory([], null!), mockPublishedContentTypeFactory.Object);
        var converter = new AndrewKDropdownPropertyValueConverter(Mock.Of<IJsonSerializer>());

        // Act
        var result = converter.GetPropertyValueType(propertyType);

        // Assert
        Assert.Equal(expectedResult, valueType.IsAssignableFrom(result));
    }

}