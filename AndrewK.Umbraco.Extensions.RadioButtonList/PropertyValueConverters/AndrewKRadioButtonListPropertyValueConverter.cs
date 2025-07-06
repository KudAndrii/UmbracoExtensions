using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors.ValueConverters;

namespace AndrewK.Umbraco.Extensions.RadioButtonList.PropertyValueConverters;

public class AndrewKRadioButtonListPropertyValueConverter : RadioButtonListValueConverter
{
    public const string EditorUiAlias = "AndrewK.Umbraco.RadioButtonList";

    public override bool IsConverter(IPublishedPropertyType propertyType)
        => propertyType.EditorUiAlias == EditorUiAlias;
}