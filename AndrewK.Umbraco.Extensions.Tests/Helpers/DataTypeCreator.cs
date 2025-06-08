using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Services.OperationStatus;

namespace AndrewK.Umbraco.Extensions.Tests.Helpers;

public class DataTypeCreator(
    IUserService userService,
    IDataTypeService dataTypeService,
    IConfigurationEditorJsonSerializer configurationEditorJsonSerializer)
{
    public async Task<Attempt<IDataType,DataTypeOperationStatus>> CreateAsync(IDataEditor editor,
        ValueStorageType dbType, string editorUiAlias, IDictionary<string, object> configuration)
    {
        var attempt = await dataTypeService.CreateAsync(new DataType(editor, configurationEditorJsonSerializer)
        {
            Name = Guid.NewGuid().ToString(),
            DatabaseType = dbType,
            ConfigurationData = configuration,
            EditorUiAlias = editorUiAlias
        }, AdminUser.Key);

        return attempt;
    }
    
    private IUser AdminUser => userService.GetUserById(-1) ??
                               throw new InvalidOperationException("Admin user not found");
}