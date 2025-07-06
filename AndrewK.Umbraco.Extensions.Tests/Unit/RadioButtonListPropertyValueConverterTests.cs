using AndrewK.Umbraco.Extensions.RadioButtonList.PropertyValueConverters;
using Moq;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace AndrewK.Umbraco.Extensions.Tests.Unit;

public class RadioButtonListPropertyValueConverterTests
{
    [Theory]
    [InlineData(AndrewKRadioButtonListPropertyValueConverter.EditorUiAlias, true)]
    [InlineData("AnyOtherEditorAlias", false)]
    public void Converter_Matching_Editor_Ui_Alias(string editorUiAlias, bool expectedResult)
    {
        // Arrange
        var mockPropertyType = new Mock<IPublishedPropertyType>();
        mockPropertyType.Setup(p => p.EditorUiAlias).Returns(editorUiAlias);

        var converter = new AndrewKRadioButtonListPropertyValueConverter();

        // Act
        var result = converter.IsConverter(mockPropertyType.Object);

        // Assert
        Assert.Equal(expectedResult, result);
    }

}