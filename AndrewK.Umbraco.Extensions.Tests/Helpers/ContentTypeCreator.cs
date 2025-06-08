using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Services.OperationStatus;
using Umbraco.Cms.Core.Strings;

namespace AndrewK.Umbraco.Extensions.Tests.Helpers;

public class ContentTypeCreator(
    IUserService userService,
    IContentTypeService contentTypeService)
{
    public async Task<Attempt<IContentType, ContentTypeOperationStatus>> CreateAsync(
        params ICollection<IPropertyType> properties)
    {
        var tab = new PropertyGroup(true)
        {
            Name = "Content",
            Alias = "content",
            SortOrder = 0,
            Type = PropertyGroupType.Tab,
            PropertyTypes = new PropertyTypeCollection(true, properties)
        };
        var contentTypeAlias = Guid.NewGuid().ToString();
        var contentType = new ContentType(ShortStringHelper, -1)
        {
            Alias = contentTypeAlias,
            Name = contentTypeAlias + " ContentType",
            Icon = "icon-document",
            AllowedAsRoot = true,
            PropertyGroups = new PropertyGroupCollection([tab])
        };
        
        var attempt = await contentTypeService.CreateAsync(contentType, AdminUser.Key);

        if (attempt.Success)
        {
            return Attempt<IContentType, ContentTypeOperationStatus>.Succeed(attempt.Result, contentType);
        }

        return attempt.Exception is not null
            ? Attempt<IContentType, ContentTypeOperationStatus>.Fail(attempt.Result, contentType, attempt.Exception)
            : Attempt<IContentType, ContentTypeOperationStatus>.Fail(attempt.Result, contentType);
    }
    
    private static IShortStringHelper ShortStringHelper =>
        new DefaultShortStringHelper(new DefaultShortStringHelperConfig());
    
    private IUser AdminUser => userService.GetUserById(-1) ??
                               throw new InvalidOperationException("Admin user not found");
}