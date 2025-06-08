using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Strings;

namespace AndrewK.Umbraco.Extensions.Tests.Helpers;

public class PropertyTypeCreator
{
    public IPropertyType Create(IDataType dataType, string alias, string name, string description)
    {
        var propertyType = new PropertyType(ShortStringHelper, dataType, alias)
        {
            Name = name,
            Description = description,
            Mandatory = false,
            SortOrder = 0,
            DataTypeId = dataType.Id
        };

        return propertyType;
    }
    
    private static IShortStringHelper ShortStringHelper =>
        new DefaultShortStringHelper(new DefaultShortStringHelperConfig());
}