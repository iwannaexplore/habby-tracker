using hobby_tracker_web_api.Database;
using hobby_tracker_web_api.Database.Entities;
using hobby_tracker_web_api.DTO;
using hobby_tracker_web_api.Extensions;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace hobby_tracker_web_api.Controllers;

[ApiController]
[Route("[controller]")]
public class HobbyController : ControllerBase
{
  public HobbyController(DatabaseContext context)
  {
    Context = context;
  }
  
  public DatabaseContext Context { get; set; }

  [HttpGet(Name = "GetMonth")]
  public MonthViewModel GetDaysForSelectedMonth(int year, int month)
  {
    var monthViewModel = new MonthViewModel();
    monthViewModel.Habits = Context.Habits.Include(e => e.Days).ToList();
    monthViewModel.Habits = monthViewModel.Habits.Select(habit =>
    {
      habit.Days = habit.Days.FindAll(d => d.Date.Year == year && d.Date.Month == month);
      return habit;
    }).ToList();

    monthViewModel.Name = $"{new DateTime(year, month, 1).ToMonthName()},{year}";
    return monthViewModel;
  } 

  [HttpPost("ChangeStateOfDay")]
  public void ChangeStateOfDay([FromBody]ChangeStateViewModel changeStateVm)
  {
    var habit = Context.Habits.Include(d=>d.Days).FirstOrDefault(h => h.Id == changeStateVm.HabitId);
    if(habit == null)
      return;
    var daysOfSelectedMonthAndYear = habit.Days.Where(d => d.Date.Year == changeStateVm.Date.Year && d.Date.Month == changeStateVm.Date.Month).ToList();
    var day = daysOfSelectedMonthAndYear.FirstOrDefault(d => d.Date.Day == changeStateVm.Date.Day);
    if (day == null)
    {
      var day1 = new Day() {IsCompleted = true, Date = changeStateVm.Date, Habit = habit};
      Context.Days.Add(day1);
    }
    else
    {
      day.IsCompleted = !day.IsCompleted;
    }
    habit.Achieved = habit.Days.Count(d => d.IsCompleted);
    Context.SaveChanges();
  }
  [HttpPost("DeleteHabit")]
  public void DeleteHabit([FromBody]int habitId)
  {
    var habit = Context.Habits.Include(d => d.Days).FirstOrDefault(h => h.Id == habitId);
    if(habit == null)
      throw new Exception("Unknown habit Id");
    Context.RemoveRange(habit.Days);
    Context.Remove(habit);
    Context.SaveChanges();
  }
  [HttpPost("AddNewHabit")]
  public Habit AddNewHabit([FromBody]NewHabitDto habitDto)
  {
    var newHabit = new Habit(){Name = habitDto.Name, Goal = habitDto.Goal};
    Context.Add(newHabit);
    Context.SaveChanges();
    return newHabit;
  }
  [HttpPost("ChangeHabit")]
  public void ChangeHabit([FromBody]NewHabitDto habitDto)
  {
    var habit = Context.Habits.FirstOrDefault(h => h.Id == habitDto.Id);
    if (habit == null)
      return;
    habit.Name = habitDto.Name;
    habit.Goal = habitDto.Goal;
    Context.Update(habit);
    Context.SaveChanges();
  }
}