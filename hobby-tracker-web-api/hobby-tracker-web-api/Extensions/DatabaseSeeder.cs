using hobby_tracker_web_api.Database;
using hobby_tracker_web_api.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace hobby_tracker_web_api.Extensions;

public static class DatabaseSeeder
{
  public static void Seed(this ModelBuilder builder)
  {
    builder.Entity<User>().HasData(new User()
    {
      Id = 1, EmailAddress = "admin", Password = "admin",
      Role = Roles.Admin, Username = "admin"
    });
    builder.Entity<Habit>().HasData(new Habit { Id = 1, Achieved = 6, Goal = 10, Name = "React", UserId = 1});
    builder.Entity<Day>().HasData(new List<Day>
    {
      new() { Id = 1, Date = new DateTime(2022, 09, 28), HabitId = 1, IsCompleted = true },
      new() { Id = 2, Date = new DateTime(2022, 10, 29), HabitId = 1, IsCompleted = true },
      new() { Id = 3, Date = new DateTime(2022, 09, 30), HabitId = 1, IsCompleted = true },
      new() { Id = 4, Date = new DateTime(2022, 10, 27), HabitId = 1, IsCompleted = true },
      new() { Id = 5, Date = new DateTime(2022, 09, 26), HabitId = 1, IsCompleted = true },
      new() { Id = 6, Date = new DateTime(2022, 10, 25), HabitId = 1, IsCompleted = true }
    });
    builder.Entity<Habit>().HasData(new Habit { Id = 2, Achieved = 6, Goal = 8, Name = "Work" , UserId = 1});
    builder.Entity<Day>().HasData(new List<Day>
    {
      new() { Id = 7, Date = new DateTime(2022, 10, 28), HabitId = 2, IsCompleted = true },
      new() { Id = 8, Date = new DateTime(2022, 09, 29), HabitId = 2, IsCompleted = true },
      new() { Id = 9, Date = new DateTime(2022, 10, 30), HabitId = 2, IsCompleted = true },
      new() { Id = 10, Date = new DateTime(2022, 09, 27), HabitId = 2, IsCompleted = true },
      new() { Id = 11, Date = new DateTime(2022, 10, 26), HabitId = 2, IsCompleted = true },
      new() { Id = 12, Date = new DateTime(2022, 09, 25), HabitId = 2, IsCompleted = true }
    });
  }
}