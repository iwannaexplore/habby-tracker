import React from 'react';
import DayProgress from "./DayProgress";
import CalendarDay from "../Entities/CalendarDay";

const Habit = ({name,calendarDays}: { name: string, calendarDays:CalendarDay[] }) => {
 let goal = 20;
 let archived = 15;
 return (
  <tr>
   <td className={"habits__col__name"}>{name}</td>
   {calendarDays.map((day) => <DayProgress isCompleted={day.isCompleted} isMustBeHighlighted={day.isMustBeHighlighted} /> )}
   <td>{goal}</td>
   <td>{archived}</td>
  </tr>
 );
};
export default Habit;