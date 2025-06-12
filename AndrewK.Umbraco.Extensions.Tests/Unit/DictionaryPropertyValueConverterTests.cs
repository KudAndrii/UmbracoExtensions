using AndrewK.Umbraco.Extensions.Dictionary.PropertyValueConverters;
using Moq;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Serialization;

namespace AndrewK.Umbraco.Extensions.Tests.Unit;

public class DictionaryPropertyValueConverterTests
{
    [Theory]
    [InlineData(AndrewKDictionaryPropertyValueConverter.EditorUiAlias, true)]
    [InlineData("AnyOtherEditorAlias", false)]
    public void Converter_Matching_Editor_Ui_Alias(string editorUiAlias, bool expectedResult)
    {
        // Arrange
        var mockPropertyType = new Mock<IPublishedPropertyType>();
        mockPropertyType.Setup(p => p.EditorUiAlias).Returns(editorUiAlias);

        var converter = new AndrewKDictionaryPropertyValueConverter(Mock.Of<IJsonSerializer>());

        // Act
        var result = converter.IsConverter(mockPropertyType.Object);

        // Assert
        Assert.Equal(expectedResult, result);
    }

    [Theory]
    [InlineData(typeof(ICollection<KeyValuePair<string, string>>), true)]
    [InlineData(typeof(IEnumerable<KeyValuePair<string, string>>), true)]
    [InlineData(typeof(Dictionary<string, string>), false)]
    public void Converter_Returns_Correct_Value_Type(Type valueType, bool expectedResult)
    {
        // Arrange
        var mockPropertyType = Mock.Of<IPublishedPropertyType>();
        var converter = new AndrewKDictionaryPropertyValueConverter(Mock.Of<IJsonSerializer>());

        // Act
        var result = converter.GetPropertyValueType(mockPropertyType);

        // Assert
        Assert.Equal(expectedResult, valueType.IsAssignableFrom(result));
    }
}