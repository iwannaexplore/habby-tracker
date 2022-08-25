import React from 'react';

const DayNumber = ({number}:{number:number}) => {
 //Todo add border changing
 return (
  <td>
   <div className={"month__day center__flex__content"}>{number}</div>
  </td>
 );
};

export default DayNumber;