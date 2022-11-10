import React, {useContext} from 'react';
import MonthRoll from "./MonthRoll";
import "./Calendar.css";
import MonthTable from "./MonthTable";
import habitContext from "../1.context/habitContext";

const CalendarContainer = () => {
 const context = useContext(habitContext);
 console.log(context.habits[0]);
 return (
  <section className={"calendar__container"}>
   <MonthRoll date={context.selectedMonth}/>
   <MonthTable date={context.selectedMonth} habits={context.habits}/>
  </section>
 );
};

export default CalendarContainer;