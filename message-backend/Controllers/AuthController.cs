using Microsoft.AspNetCore.Mvc;
using Messages.Models;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;

namespace backend.Controllers {
    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller {
        readonly ApiContext context;
        public AuthController(ApiContext context) {
            this.context = context;
        }
        public class JwtPacket {
            public string Token { get; set; }
            public string FirstName { get; set; }
        }
        public class LoginData {
            public string Email { get; set; }
            public string Password { get; set; }
        }
        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginData loginData) {
            var user =context.Users.SingleOrDefault(u => u.email == loginData.Email && u.password == loginData.Password);
            if (user == null) return NotFound("email or password incorrect");
            return Ok(CreateJwtPacket(user));
        }
        [HttpPost("register")]
        public JwtPacket Register([FromBody] User user) {
            context.Users.Add(user);
            context.SaveChanges();
            return CreateJwtPacket(user);
        }
        JwtPacket CreateJwtPacket(User user) {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return new JwtPacket() { Token = encodedJwt, FirstName =  user.firstName };
        }
    }
}