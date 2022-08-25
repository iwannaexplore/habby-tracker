import React from 'react';
import MonthRoll from "./MonthRoll";
import MonthTable from "./MonthTable";

const CalendarContainer = () => {
 return (
  <section className={"calendar__container"}>
   <MonthRoll/>
   <MonthTable/>
  </section>
 );
};

export default CalendarContainer;