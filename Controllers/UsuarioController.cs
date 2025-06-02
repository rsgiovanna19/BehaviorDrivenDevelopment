using Microsoft.AspNetCore.Mvc;
using educaTech.Data;
using educaTech.Models;
using System.Linq;

namespace educaTech.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuarioController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult PostUsuario([FromBody] Usuario novoUsuario)
        {
            if (string.IsNullOrWhiteSpace(novoUsuario.Nome) ||
                string.IsNullOrWhiteSpace(novoUsuario.Email) ||
                string.IsNullOrWhiteSpace(novoUsuario.Senha))
            {
                return BadRequest("Todos os campos são obrigatórios.");
            }

            var existente = _context.Usuarios.FirstOrDefault(u => u.Email == novoUsuario.Email);
            if (existente != null)
                return Conflict("Email já cadastrado.");

            _context.Usuarios.Add(novoUsuario);
            _context.SaveChanges();

            return Ok(novoUsuario);
        }

        [HttpPost("validar-login")]
        public IActionResult ValidarLogin([FromBody] Usuario login)
        {
            var user = _context.Usuarios.FirstOrDefault(u =>
                u.Email == login.Email && u.Senha == login.Senha);

            if (user == null)
                return Unauthorized("Email ou senha inválidos.");

            return Ok(user);
        }
    }
}
