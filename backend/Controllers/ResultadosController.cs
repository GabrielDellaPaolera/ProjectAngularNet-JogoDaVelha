using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResultadosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ResultadosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostResultados([FromBody] Resultado resultado)
        {
            resultado.DataHora = DateTime.UtcNow;
            _context.Resultados.Add(resultado);
            await _context.SaveChangesAsync();
            return Ok(resultado);
        }

        [HttpGet("ultimos")]
        public async Task<IActionResult> GetUltimosResultados()
        {
            var ultimosResultados = await _context.Resultados
                .OrderByDescending(r => r.DataHora)
                .Take(10)
                .ToListAsync();

            return Ok(ultimosResultados);
        }
    }
}
