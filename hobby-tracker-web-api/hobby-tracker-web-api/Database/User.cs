using System.ComponentModel.DataAnnotations;

using hobby_tracker_web_api.Database.Entities;

namespace hobby_tracker_web_api.Database;

public class User
{
  public int Id { get; set; }
  [Required]
  public string Username { get; set; }
  [Required]
  public string Password { get; set; }
  public string EmailAddress { get; set; }
  public Roles Role { get; set; } = Roles.User;
  public List<Habit> Habits { get; set; } = new List<Habit>();
}
public enum Roles
{
  Admin=1,User=0
}
