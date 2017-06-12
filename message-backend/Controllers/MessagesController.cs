using Microsoft.AspNetCore.Mvc;
using Messages.Models;
using System.Collections.Generic;

namespace backend.Controllers {
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller {
        public IEnumerable<Message> Get() {
            return new Message[] { 
                new Message { Owner = "Time", Text = "First Message"},
                new Message { Owner = "John", Text = "Second Message"}
            };
        }
    }
}