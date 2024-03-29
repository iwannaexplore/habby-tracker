import React, {useContext} from 'react';
import MonthTopRoll from "./MonthTopRoll";
import "./Calendar.css";
import MonthTable from "./MonthTable";
import habitContext from "../1.context/habitContext";
import Footer from "../5.footer/Footer";

const CalendarContainer = () => {
 const context = useContext(habitContext);
 return (
   <>
     <section className={"calendar__container"}>
       <MonthTopRoll date={context.selectedMonth}/>
       <MonthTable date={context.selectedMonth} habits={context.habits}/>
     </section>
     <Footer/>
   </>
 );
};

export default CalendarContainer;