using System.Net;
using AndrewK.Umbraco.Extensions.Tests.Abstractions;

namespace AndrewK.Umbraco.Extensions.Tests.Integration;

public class ProjectIntegrationTests(
    SharedWebApplicationFactory sharedFactory) : IntegrationTestBase(sharedFactory)
{
    [Fact(DisplayName = "Project is running")]
    public async Task GetRootPage_HappyFlow_ReturnsOK()
    {
        // arrange
        var client = WebsiteFactory.CreateClient();

        // act
        var response = await client.GetAsync("/umbraco");

        // assert
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}