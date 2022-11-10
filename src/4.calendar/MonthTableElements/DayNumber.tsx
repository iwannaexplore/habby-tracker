import React from 'react';

const DayNumber = ({number, isMustBeHighlighted}:{number:number, isMustBeHighlighted:boolean}) => {
 let borderClass = isMustBeHighlighted?"highlightedCell":"";
 return (
  <td className={borderClass}>
   <div className={`month__day center__flex__content`}>{number}</div>
  </td>
 );
};

export default DayNumber;