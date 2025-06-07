using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.PropertyEditors.ValueConverters;
using Umbraco.Cms.Core.Serialization;

namespace AndrewK.Umbraco.Extensions.Dropdown.PropertyValueConverters;

public class AndrewKDropdownPropertyValueConverter(IJsonSerializer jsonSerializer)
    : FlexibleDropdownPropertyValueConverter(jsonSerializer)
{
    public override bool IsConverter(IPublishedPropertyType propertyType)
        => propertyType.EditorUiAlias == "AndrewK.Umbraco.Dropdown";

    public override Type GetPropertyValueType(IPublishedPropertyType propertyType) =>
        IsMultiple(propertyType) ? typeof(IEnumerable<string>) : typeof(string);

    public override object? ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType,
        PropertyCacheLevel referenceCacheLevel, object? inter, bool preview)
    {
        if (inter is null)
        {
            return null;
        }

        var multiple = IsMultiple(propertyType);
        var selectedValues = (string[])inter;
        if (selectedValues.Length > 0)
        {
            return multiple
                ? selectedValues
                : selectedValues[0];
        }

        return multiple
            ? inter
            : string.Empty;
    }

    private static bool IsMultiple(IPublishedPropertyType propertyType) =>
        propertyType.DataType.ConfigurationObject is IReadOnlyDictionary<string, object?> configuration &&
        configuration.GetValueOrDefault("multiple", null) is true;
}