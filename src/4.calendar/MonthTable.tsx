import React, {useEffect, useState} from 'react';
import WeekdayName from "./MonthTableElements/WeekdayName";
import DayNumber from "./MonthTableElements/DayNumber";
import HabitContainer from "./MonthTableElements/HabitContainer";
import CalendarMonth from "../2.entities/CalendarMonth";


const MonthTable = ({date, habits}: { date: Date, habits: any[] }) => {
 let tableHeaderDays = new CalendarMonth(date);
 return (
  <table className={"whole__month__table"}>
   <thead>
   <tr className={"day__names"}>
    <td rowSpan={2} className={"without__border"}>
     <div className={"habits__col__name_label center__flex__content"}>Habits</div>
    </td>
    {tableHeaderDays.calendarDays.map((calendarDay) => <WeekdayName key={calendarDay.date.getDate()}
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
    {tableHeaderDays.calendarDays.map((calendarDay) => <DayNumber key={calendarDay.date.getDate()}
                                                                number={calendarDay.date.getDate()}
                                                                isMustBeHighlighted={calendarDay.isMustBeHighlighted}/>)}
   </tr>
   </thead>
   <tbody>
   {habits.map(h => <HabitContainer key={h.id} habit={h} date={date}/>)}
   </tbody>

  </table>
 );
};

export default MonthTable;