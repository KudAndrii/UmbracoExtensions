using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;

namespace AndrewK.Umbraco.Extensions.Dictionary.PropertyValueConverters;

public class AndrewKDictionaryPropertyValueConverter : PropertyValueConverterBase
{
    public const string EditorUiAlias = "AndrewK.Umbraco.Dictionary";
    private readonly IJsonSerializer _jsonSerializer;

    public AndrewKDictionaryPropertyValueConverter(IJsonSerializer jsonSerializer)
    {
        _jsonSerializer = jsonSerializer;
    }

    public override bool IsConverter(IPublishedPropertyType propertyType)
        => propertyType.EditorUiAlias == EditorUiAlias;

    public override Type GetPropertyValueType(IPublishedPropertyType propertyType)
        => typeof(ICollection<KeyValuePair<string, string>>);

    public override object? ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType,
        PropertyCacheLevel referenceCacheLevel, object? inter, bool preview)
    {
        if (inter is not string { Length: > 0 } stringValue)
        {
            return null;
        }

        return _jsonSerializer.Deserialize<IEnumerable<KeyValuePair<string, string>>>(stringValue)?.ToList();
    }
}