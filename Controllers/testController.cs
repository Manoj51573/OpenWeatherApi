using Microsoft.AspNetCore.Mvc;

namespace OpenWeatherApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly ITestService _testService;

        public TestController(ITestService testService)
        {
            _testService = testService;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] TestModel model)
        {
            var result = await _testService.AddAsync(model);
            return Ok(result);
        }

        [HttpPost("insert")]
        public async Task<IActionResult> Insert([FromBody] TestModel model)
        {
            var result = await _testService.InsertAsync(model);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] TestModel model)
        {
            var result = await _testService.UpdateAsync(id, model);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _testService.DeleteAsync(id);
            return Ok(result);
        }
    }

    // Interface for the service layer
    public interface ITestService
    {
        Task<object> AddAsync(TestModel model);
        Task<object> InsertAsync(TestModel model);
        Task<object> UpdateAsync(int id, TestModel model);
        Task<object> DeleteAsync(int id);
    }

    // Model class
    public class TestModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        // Add other properties as needed
    }
}