namespace hobby_tracker_web_api.Database.Entities;

public class Day
{
  public int Id { get; set; }
  public bool IsCompleted { get; set; }
  public DateTime Date { get; set; }
  public Habit Habit { get; set; }
  public int HabitId { get; set; }
}