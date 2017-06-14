using Microsoft.AspNetCore.Mvc;
using Messages.Models;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;

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
        }
        [HttpPost("register")]
        public JwtPacket Register([FromBody] User user) {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            context.Users.Add(user);
            context.SaveChanges();
            return new JwtPacket() { Token = encodedJwt };
        }
    }
}