using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.PropertyEditors.ValueConverters;
using Umbraco.Cms.Core.Serialization;

namespace AndrewK.Umbraco.Extensions.CheckBoxList.PropertyValueConverters;

public class AndrewKCheckBoxListPropertyValueConverter(IJsonSerializer jsonSerializer)
    : CheckboxListValueConverter(jsonSerializer)
{
    public const string EditorUiAlias = "AndrewK.Umbraco.CheckBoxList";

    private readonly IJsonSerializer _jsonSerializer1 = jsonSerializer;

    public override bool IsConverter(IPublishedPropertyType propertyType)
        => propertyType.EditorUiAlias == EditorUiAlias;

    public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(ICollection<string>);

    public override object? ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType,
        PropertyCacheLevel referenceCacheLevel, object? inter, bool preview)
    {
        if (inter is not string { Length: > 0 } interString)
        {
            return Enumerable.Empty<string>();
        }

        return _jsonSerializer1.Deserialize<IEnumerable<string>>(interString)?.ToList();
    }
}