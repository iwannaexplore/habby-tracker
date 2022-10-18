import React, {useEffect, useState} from 'react';
import WeekdayName from "./MonthTableElements/WeekdayName";
import DayNumber from "./MonthTableElements/DayNumber";
import Habit from "./MonthTableElements/Habit";
import CalendarMonth from "./Entities/CalendarMonth";


const MonthTable = ({date, habits}: { date: Date, habits: any[] }) => {

 let tableHeaderDays = new CalendarMonth(date);

 return (
  <table className={"whole__month__table"}>
   <thead>
   <tr className={"day__names"}>
    <td rowSpan={2} className={"without__border"}>
     <div className={"habits__col__name_label center__flex__content"}>Habits</div>
    </td>
    {tableHeaderDays.calendarDays.map((calendarDay) => <WeekdayName key={calendarDay.dayNumber}
                                                                  dayName={calendarDay.dayName}
                                                                  isMustBeHighlighted={calendarDay.isMustBeHighlighted}/>)}
    <td rowSpan={2} className={"without__border"}>
     <div className={"goal__col__label center__flex__content"}>Goal</div>
    </td>
    <td rowSpan={2} className={"without__border"}>
     <div className={"archive__col__label center__flex__content"}>Archived</div>
    </td>
   </tr>
   <tr className={"day__number"}>
    {tableHeaderDays.calendarDays.map((calendarDay) => <DayNumber key={calendarDay.dayNumber}
                                                                number={calendarDay.dayNumber}
                                                                isMustBeHighlighted={calendarDay.isMustBeHighlighted}/>)}
   </tr>
   </thead>
   <tbody>
   {habits.map(h => <Habit key={h.id} date={date} name={h.name} completedDays={h.days}
                           goal={h.goal}/>)}
   </tbody>

  </table>
 );
};

export default MonthTable;