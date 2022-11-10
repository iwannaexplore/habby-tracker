import React from 'react';

const WeekdayName = ({dayName, isMustBeHighlighted}: { dayName: string, isMustBeHighlighted: boolean }) => {
 let borderClass = isMustBeHighlighted ? "highlightedCell" : "";
 let firstLetter = dayName.charAt(0);
 return (
  <td className={borderClass}>
   <div className={`weekdays__labels center__flex__content`}>{firstLetter.toUpperCase()}</div>
  </td>
 );
};

export default WeekdayName;