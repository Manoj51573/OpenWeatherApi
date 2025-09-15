using Microsoft.AspNetCore.Mvc;

namespace OpenWeatherApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestFeatureController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "Test feature is working", timestamp = DateTime.UtcNow });
        }
    }
}