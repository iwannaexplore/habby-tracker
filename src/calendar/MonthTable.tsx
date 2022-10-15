import React, {useEffect, useState} from 'react';
import WeekdayName from "./MonthTableElements/WeekdayName";
import DayNumber from "./MonthTableElements/DayNumber";
import Habit from "./MonthTableElements/Habit";
import CalendarMonth from "./Entities/CalendarMonth";


const MonthTable = ({date}: { date: Date }) => {
 date = date != null ? date : new Date();

 let calendarMonth = new CalendarMonth(date);


 return (
  <table className={"whole__month__table"}>
   <tr className={"day__names"}>
    <td rowSpan={2} className={"without__border"}>
     <div className={"habits__col__name_label center__flex__content"}>Habits</div>
    </td>
    {calendarMonth.calendarDays.map((calendarDay) => <WeekdayName dayName={calendarDay.dayName}
                                                                  isMustBeHighlighted={calendarDay.isMustBeHighlighted}/>)}
    <td rowSpan={2} className={"without__border"}>
     <div className={"goal__col__label center__flex__content"}>Goal</div>
    </td>
    <td rowSpan={2} className={"without__border"}>
     <div className={"archive__col__label center__flex__content"}>Archived</div>
    </td>
   </tr>
   <tr className={"day__number"}>
    {calendarMonth.calendarDays.map((calendarDay) => <DayNumber number={calendarDay.dayNumber}
                                                                isMustBeHighlighted={calendarDay.isMustBeHighlighted}/>)}
   </tr>
   <Habit name={"Work hard"} calendarDays={calendarMonth.calendarDays}/>
   <Habit name={"Work hard"} calendarDays={calendarMonth.calendarDays}/>
   <Habit name={"Work hard"} calendarDays={calendarMonth.calendarDays}/>
  </table>
 );
};

export default MonthTable;