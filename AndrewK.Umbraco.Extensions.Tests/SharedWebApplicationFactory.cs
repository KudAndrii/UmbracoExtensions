namespace AndrewK.Umbraco.Extensions.Tests;

public class SharedWebApplicationFactory : IDisposable
{
    public ExampleWebApplicationFactory Factory { get; }

    public SharedWebApplicationFactory()
    {
        Factory = new ExampleWebApplicationFactory();
    }

    public void Dispose()
    {
        Factory.Dispose();
    }
}