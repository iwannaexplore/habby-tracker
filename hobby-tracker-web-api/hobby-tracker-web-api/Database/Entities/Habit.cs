namespace hobby_tracker_web_api.Database.Entities;

public class Habit
{
  public int Id { get; set; }
  public string Name { get; set; }
  public List<Day> Days { get; set; }
  public int Goal { get; set; }
  public int Achieved { get; set; }
}