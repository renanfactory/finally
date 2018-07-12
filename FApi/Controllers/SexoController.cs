using FApi.Data;
using FApi.Data.Entities.Dominios;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FApi.Controllers
{
    /// <summary>
    /// Identity Web API controller.
    /// </summary>
    [Route("api/[controller]")]
    // Authorization policy for this API.
    public class SexoController : Controller
    {
        private ApplicationDbContext _ApplicationDbContext { get; set; }

        public SexoController(ApplicationDbContext applicationDbContext)
        {
            _ApplicationDbContext = applicationDbContext;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Sexo> Get()
        {
            return _ApplicationDbContext.Sexos.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Sexo Get(int id)
        {
            return _ApplicationDbContext.Sexos.Find(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Sexo value)
        {
            _ApplicationDbContext.Sexos.Add(value);
            _ApplicationDbContext.SaveChanges();
        }
        
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            var pessoa = await _ApplicationDbContext.Sexos.FindAsync(id);
            _ApplicationDbContext.Sexos.Remove(pessoa);
            await _ApplicationDbContext.SaveChangesAsync();
        }
    }
}
