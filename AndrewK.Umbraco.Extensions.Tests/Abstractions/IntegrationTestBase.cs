using AndrewK.Umbraco.Extensions.Tests.Helpers;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;

namespace AndrewK.Umbraco.Extensions.Tests.Abstractions;

public abstract class IntegrationTestBase : IDisposable
{
    private AsyncServiceScope Scope { get; set; }
    protected ExampleWebApplicationFactory WebsiteFactory { get; set; }
    protected DataTypeCreator DataTypeCreator { get; }
    protected PropertyTypeCreator PropertyTypeCreator { get; }
    protected ContentTypeCreator ContentTypeCreator { get; }
    protected ContentCreator ContentCreator { get; }

    protected IntegrationTestBase()
    {
        WebsiteFactory = new ExampleWebApplicationFactory();
        Scope = WebsiteFactory.Services.GetRequiredService<IServiceScopeFactory>().CreateAsyncScope();

        DataTypeCreator = new DataTypeCreator(GetService<IConfigurationEditorJsonSerializer>());
        PropertyTypeCreator = new PropertyTypeCreator();
        ContentTypeCreator = new ContentTypeCreator(GetService<IContentTypeService>());
        ContentCreator = new ContentCreator();
    }

    protected TType GetService<TType>() =>
        Scope.ServiceProvider.GetService<TType>() ??
        throw new InvalidOperationException($"Unable to resolve {typeof(TType).Name}");
    
    public static IShortStringHelper ShortStringHelper =>
        new DefaultShortStringHelper(new DefaultShortStringHelperConfig());

    public void Dispose()
    {
        Scope.Dispose();
        WebsiteFactory.Dispose();
    }
}