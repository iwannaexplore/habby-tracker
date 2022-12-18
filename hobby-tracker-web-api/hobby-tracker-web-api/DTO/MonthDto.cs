using hobby_tracker_web_api.Database.Entities;

namespace hobby_tracker_web_api.DTO;

public class MonthViewModel
{
  public List<Habit> Habits { get; set; }
  public string Name { get; set; }
}