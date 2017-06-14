using Microsoft.AspNetCore.Mvc;
using Messages.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers {
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller {
        readonly ApiContext context;
        public MessagesController(ApiContext context) {
            this.context = context;
        }
        public IEnumerable<Message> Get() {
            return context.Messages;
        }
        [HttpGet("{name}")]
        public IEnumerable<Message> Get(string name) {
            return context.Messages.Where(message => message.Owner == name);
        }
        [HttpPost]
        public Message Post([FromBody] Message message) {
            var dbMessage = context.Messages.Add(message).Entity;
            context.SaveChanges();
            return dbMessage;
        }
    }
}