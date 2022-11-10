using hobby_tracker_web_api.Database;
using hobby_tracker_web_api.Database.Entities;
using hobby_tracker_web_api.Extensions;
using hobby_tracker_web_api.ViewModel;
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
    Context.SaveChanges();
  }
}