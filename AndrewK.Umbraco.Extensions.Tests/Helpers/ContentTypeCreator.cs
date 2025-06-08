using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;

namespace AndrewK.Umbraco.Extensions.Tests.Helpers;

public class ContentTypeCreator(IContentTypeService contentTypeService)
{
    public IContentType Create(string alias, string name, string description)
    {
        var contentType = new ContentType(ShortStringHelper, -1)
        {
            Alias = alias,
            Name = name,
            Description = description,
            Icon = "icon-document",
            AllowedAsRoot = true
        };

        return contentType;
    }
    
    private static IShortStringHelper ShortStringHelper =>
        new DefaultShortStringHelper(new DefaultShortStringHelperConfig());
}