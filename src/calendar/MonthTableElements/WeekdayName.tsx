import React from 'react';

const WeekdayName = ({dayName}: { dayName: string }) => {
 //Todo Add border changing
 let firstLetter = dayName.charAt(0)
 return (
  <td>
   <div className={"weekdays__labels center__flex__content"}>{firstLetter.toUpperCase()}</div>
  </td>
 );
};

export default WeekdayName;