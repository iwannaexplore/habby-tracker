import React, {useContext} from 'react';
import MonthTopRoll from "./MonthTopRoll";
import "./Calendar.css";
import MonthTable from "./MonthTable";
import habitContext from "../1.context/habitContext";

const CalendarContainer = () => {
 const context = useContext(habitContext);
 console.log(context.habits[0]);
 return (
  <section className={"calendar__container"}>
   <MonthTopRoll date={context.selectedMonth}/>
   <MonthTable date={context.selectedMonth} habits={context.habits}/>
  </section>
 );
};

export default CalendarContainer;