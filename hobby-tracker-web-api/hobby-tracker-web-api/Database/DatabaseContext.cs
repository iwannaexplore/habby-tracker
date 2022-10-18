using hobby_tracker_web_api.Database.Entities;
using hobby_tracker_web_api.Extensions;
using Microsoft.EntityFrameworkCore;

namespace hobby_tracker_web_api.Database;

public sealed class DatabaseContext : DbContext
{
  public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
  {
    Database.EnsureDeleted();
    Database.EnsureCreated();
  }

  public DbSet<Day> Days { get; set; }
  public DbSet<Habit> Habits { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
    modelBuilder.Seed();
  }
}