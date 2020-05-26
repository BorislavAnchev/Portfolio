using Microsoft.EntityFrameworkCore;

namespace ChatAPI.Models
{
    public class ChatDbContext : DbContext
    {
        public ChatDbContext(DbContextOptions<ChatDbContext> options) : base(options)
        {

        }
        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Message
            modelBuilder.Entity<Message>().Property(p => p.Content).IsRequired(); // Let it be nvarchar(MAX) for now.
            modelBuilder.Entity<Message>().Property(p => p.TimeLog).HasColumnType("datetime").IsRequired();
        }
    }
}
