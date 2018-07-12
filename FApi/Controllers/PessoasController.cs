using FApi.Data;
using FApi.Data.Entities.CRM;
using FApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
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
    public class PessoasController : Controller
    {
        private ApplicationDbContext _ApplicationDbContext { get; set; }

        public PessoasController(ApplicationDbContext applicationDbContext)
        {
            _ApplicationDbContext = applicationDbContext;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Pessoa> Get()
        {
            return _ApplicationDbContext.Pessoas.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Pessoa Get(int id)
        {
            return _ApplicationDbContext.Pessoas.Find(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] PessoaModel value)
        {
            var pessoa = new Pessoa
            {
                Nome = value.Nome,
                Sobrenome = value.Sobrenome,
                Sexo = value.Sexo,
                DataNascimento = Convert.ToDateTime(value.DataNascimento),
                DataCriacao = DateTime.Now
            };

            _ApplicationDbContext.Pessoas.Add(pessoa);
            _ApplicationDbContext.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task PutAsync(int id, [FromBody] string value)
        {
            var pessoa = await _ApplicationDbContext.Pessoas.FindAsync(id);
            _ApplicationDbContext.Pessoas.Update(pessoa);
            await _ApplicationDbContext.SaveChangesAsync();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            var pessoa = await _ApplicationDbContext.Pessoas.FindAsync(id);
            _ApplicationDbContext.Pessoas.Remove(pessoa);
            await _ApplicationDbContext.SaveChangesAsync();
        }
    }
}
