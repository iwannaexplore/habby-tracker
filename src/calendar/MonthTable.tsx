import React from 'react';
import WeekdayName from "./MonthTableElements/WeekdayName";
import DayNumber from "./MonthTableElements/DayNumber";
import Habit from "./MonthTableElements/Habit";

const MonthTable = () => {
 let week = ["M", "T", "W", "T", "F", "S", "S"]; // Todo calculate weeks
 let monthWeekDayNames = week.concat(week.concat(week.concat(week))); // Todo calculate week day names
 let monthDaysNumber = Array.from(Array(28).keys()); // todo calculate days number for current month
 return (
  <table className={"whole__month__table"}>
   <tr>
    <td rowSpan={2} className={"without__border"}>
     <div className={"habits__col__name_label center__flex__content"}>Habits</div>
    </td>
    {monthWeekDayNames.map((e) => <WeekdayName dayName={e}/>)}
    <td rowSpan={2} className={"without__border"}>
     <div className={"goal__col__label center__flex__content"}>Goal</div>
    </td>
    <td rowSpan={2} className={"without__border"}>
     <div className={"archive__col__label center__flex__content"}>Archived</div>
    </td>
   </tr>
   <tr>
    {monthDaysNumber.map((e) => <DayNumber number={e}/>)}
   </tr>
   <Habit name={"Work hard"}/>
  </table>
 );
};

export default MonthTable;