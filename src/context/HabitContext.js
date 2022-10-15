import React, {useEffect, useState} from "react";


const HabitContext = React.createContext({
 completedDays: [],
 selectedMonth: Date
});

export const HabitContextProvider = (props) => {
 let [days, setDays] = useState([]);
 let [selectedDay, setSelectedDay] = useState(new Date());

 useEffect(() => {
  fetch(`https://localhost:7027/Hobby?year=${selectedDay.getFullYear()}&month=${selectedDay.getMonth() + 1}`)
   .then(e => e.json()).then(r => {
   console.log(r);
    setDays(r)});
 }, [selectedDay])

 const changeSelectedMonth = (date) => {
  setSelectedDay(date);
 }


 return (
  <HabitContext.Provider value={(
   {
    days: days,
    onChangeSelectedMonth: changeSelectedMonth,
   })}>{props.children}</HabitContext.Provider>
 );
};

export default HabitContext;