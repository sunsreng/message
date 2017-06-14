using Messages.Models;
using Microsoft.EntityFrameworkCore;

namespace backend {
    public class ApiContext : DbContext {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) {}
        public DbSet<Message> Messages {get;set;}
        public DbSet<User> Users {get;set;}
    }
}