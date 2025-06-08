using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;

namespace AndrewK.Umbraco.Extensions.Tests.Helpers;

public class DataTypeCreator(IConfigurationEditorJsonSerializer configurationEditorJsonSerializer)
{
    public IDataType Create(IDataEditor editor, string name, ValueStorageType dbType, IDictionary<string, object> configuration)
    {
        var dataType = new DataType(editor, configurationEditorJsonSerializer)
        {
            Id = new Random().Next(),
            Name = name,
            DatabaseType = dbType,
            ConfigurationData = configuration
        };

        return dataType;
    }
}