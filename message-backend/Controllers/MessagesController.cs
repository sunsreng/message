using Microsoft.AspNetCore.Mvc;
using Messages.Models;
using System.Collections.Generic;

namespace backend.Controllers {
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller {
        static List<Message> messages = new List<Message> { 
                new Message { Owner = "Time", Text = "First Message"},
                new Message { Owner = "John", Text = "Second Message"}
            };
        public IEnumerable<Message> Get() {
            return messages;
        }
        [HttpGet("{name}")]
        public IEnumerable<Message> Get(string name) {
            return messages.FindAll(message => message.Owner == name);
        }
        [HttpPost]
        public Message Post([FromBody] Message message) {
            messages.Add(message);
            return message;
        }
    }
}