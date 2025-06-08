using AndrewK.Umbraco.Extensions.Example;
using AndrewK.Umbraco.Extensions.Tests.Helpers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AndrewK.Umbraco.Extensions.Tests;

public class ExampleWebApplicationFactory : WebApplicationFactory<Program>
{
    private const string InMemoryConnectionString = "Data Source=IntegrationTests;Mode=Memory;Cache=Shared";
    private readonly SqliteConnection _inMemoryConnection;

    public ExampleWebApplicationFactory()
    {
        // Shared in-memory databases get destroyed when the last connection is closed.
        _inMemoryConnection = new SqliteConnection(InMemoryConnectionString);

        // Keeping a connection open while this web application is used ensures
        // that the database does not get destroyed in the middle of a test.
        _inMemoryConnection.Open();
    }

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Development");

        builder.ConfigureServices(services =>
        {
            services.AddScoped<DataTypeCreator>();
            services.AddScoped<ContentTypeCreator>();
        });

        var projectDir = Directory.GetCurrentDirectory();
        var configPath = Path.Combine(projectDir, "integration.settings.json");
        builder.ConfigureAppConfiguration(conf =>
        {
            conf.AddJsonFile(configPath);
            conf.AddInMemoryCollection(new List<KeyValuePair<string, string?>>
            {
                new("ConnectionStrings:umbracoDbDSN", InMemoryConnectionString),
                new("ConnectionStrings:umbracoDbDSN_ProviderName", "Microsoft.Data.Sqlite")
            });
        });
    }

    protected override void Dispose(bool disposing)
    {
        base.Dispose(disposing);

        // When this application factory is disposed, close the connection to the in-memory database
        // This will destroy the in-memory database
        _inMemoryConnection.Close();
        _inMemoryConnection.Dispose();
    }
}