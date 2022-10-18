import React from 'react';
import DayProgress from "./DayProgress";
import CalendarMonth from "../Entities/CalendarMonth";

const Habit = ({name,date, completedDays, goal}:
                { name: string, date:Date, completedDays: any[], goal: number }) => {
 let allDaysForThisMonth = new CalendarMonth(date);
 let archived = completedDays.length;
 for (const completedDay of completedDays) {
  for (const calendarDay of allDaysForThisMonth.calendarDays) {
   if (calendarDay.dayNumber === new Date(completedDay.date).getDay()) {
    calendarDay.isCompleted = true;
   }
  }
 }
 return (
  <tr>
   <td className={"habits__col__name"}>{name}</td>
   {allDaysForThisMonth.calendarDays.map((day) => {
    return <DayProgress key={day.dayNumber} isCompleted={day.isCompleted}
                        isMustBeHighlighted={day.isMustBeHighlighted}/>
   })}
   <td>{goal}</td>
   <td>{archived}</td>
  </tr>
 );
};
export default Habit;