using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Routing;

namespace AndrewK.Umbraco.KeyedDropdown.Controllers
{
    [ApiController]
    [BackOfficeRoute("andrewkumbracokeyeddropdown/api/v{version:apiVersion}")]
    [Authorize(Policy = AuthorizationPolicies.SectionAccessContent)]
    [MapToApi(Constants.ApiName)]
    public class AndrewKUmbracoKeyedDropdownApiControllerBase : ControllerBase
    {
    }
}