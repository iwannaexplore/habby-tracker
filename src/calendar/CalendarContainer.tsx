import React from 'react';
import MonthRoll from "./MonthRoll";
import "./Calendar.css";
import MonthTable from "./MonthTable";

const CalendarContainer = () => {

 let date = new Date(2022, 8, 10);
 return (
  <section className={"calendar__container"}>
   <MonthRoll date={date}/>
   <MonthTable date={date}/>
  </section>
 );
};

export default CalendarContainer;