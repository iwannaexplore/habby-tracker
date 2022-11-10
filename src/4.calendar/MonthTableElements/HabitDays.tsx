import React from 'react';
import DayProgress from "./DayProgress";
import CalendarMonth from "../../2.entities/CalendarMonth";
import Habit from "../../2.entities/Habit";


const HabitDays = ({habit, date}:
                     { habit: Habit, date: Date }) => {
  let allDaysForThisMonth = new CalendarMonth(date);
  for (const completedDay of habit.days) {
    for (const calendarDay of allDaysForThisMonth.calendarDays) {
      if (calendarDay.date.getDate() === new Date(completedDay.date).getDate()) {
        calendarDay.isCompleted = completedDay.isCompleted;
      }
    }
  }

  return (
    <tr>
      <td className={"habits__col__name"}>{habit.name}</td>
      {allDaysForThisMonth.calendarDays.map((day) => {
        return <DayProgress key={day.date.getDate()} habitId={habit.id} dayProgress={day}/>
      })}
      <td>{habit.goal}</td>
      <td>{habit.achieved}</td>
    </tr>
  );
};

export default HabitDays;