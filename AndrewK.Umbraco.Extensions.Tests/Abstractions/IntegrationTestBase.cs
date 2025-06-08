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
    protected ContentTypeCreator ContentTypeCreator { get; }

    protected IntegrationTestBase()
    {
        WebsiteFactory = new ExampleWebApplicationFactory();
        Scope = WebsiteFactory.Services.GetRequiredService<IServiceScopeFactory>().CreateAsyncScope();

        DataTypeCreator = GetService<DataTypeCreator>();
        ContentTypeCreator = GetService<ContentTypeCreator>();
    }

    protected TType GetService<TType>() =>
        Scope.ServiceProvider.GetService<TType>() ??
        throw new InvalidOperationException($"Unable to resolve {typeof(TType).Name}");

    protected static IShortStringHelper ShortStringHelper =>
        new DefaultShortStringHelper(new DefaultShortStringHelperConfig());

    public void Dispose()
    {
        Scope.Dispose();
        WebsiteFactory.Dispose();
    }
}