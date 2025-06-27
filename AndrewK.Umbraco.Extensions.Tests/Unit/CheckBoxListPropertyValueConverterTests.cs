using AndrewK.Umbraco.Extensions.CheckBoxList.PropertyValueConverters;
using Moq;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Serialization;

namespace AndrewK.Umbraco.Extensions.Tests.Unit;

public class CheckBoxListPropertyValueConverterTests
{
    [Theory]
    [InlineData(AndrewKCheckBoxListPropertyValueConverter.EditorUiAlias, true)]
    [InlineData("AnyOtherEditorAlias", false)]
    public void Converter_Matching_Editor_Ui_Alias(string editorUiAlias, bool expectedResult)
    {
        // Arrange
        var mockPropertyType = new Mock<IPublishedPropertyType>();
        mockPropertyType.Setup(p => p.EditorUiAlias).Returns(editorUiAlias);

        var converter = new AndrewKCheckBoxListPropertyValueConverter(Mock.Of<IJsonSerializer>());

        // Act
        var result = converter.IsConverter(mockPropertyType.Object);

        // Assert
        Assert.Equal(expectedResult, result);
    }

    [Theory]
    [InlineData(typeof(ICollection<string>), true)]
    [InlineData(typeof(IEnumerable<string>), true)]
    [InlineData(typeof(List<string>), false)]
    public void Converter_Returns_Correct_Value_Type(Type valueType, bool expectedResult)
    {
        // Arrange
        var converter = new AndrewKCheckBoxListPropertyValueConverter(Mock.Of<IJsonSerializer>());

        // Act
        var result = converter.GetPropertyValueType(Mock.Of<IPublishedPropertyType>());

        // Assert
        Assert.Equal(expectedResult, valueType.IsAssignableFrom(result));
    }
}