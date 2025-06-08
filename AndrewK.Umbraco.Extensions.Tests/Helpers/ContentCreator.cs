using Umbraco.Cms.Core.Models;

namespace AndrewK.Umbraco.Extensions.Tests.Helpers;

public class ContentCreator
{
    public IContent Create(string name, IContentType contentType)
    {
        var content = new Content(name, -1, contentType);

        return content;
    }
}