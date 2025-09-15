using Microsoft.AspNetCore.Mvc;

namespace OpenWeatherApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestFeatureController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTestData()
        {
            return Ok("Test feature is working!");
        }
    }
}