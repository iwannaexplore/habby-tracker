import React, {useContext} from 'react';
import MonthRoll from "./MonthRoll";
import "./Calendar.css";
import MonthTable from "./MonthTable";
import HabitContext from "../context/HabitContext";

const CalendarContainer = () => {
 const context = useContext(HabitContext)
 return (
  <section className={"calendar__container"}>
   <MonthRoll date={context.selectedMonth}/>
   <MonthTable date={context.selectedMonth} habits={context.habits}/>
  </section>
 );
};

export default CalendarContainer;