import React, {useEffect, useState} from "react";


const HabitContext = React.createContext({
 habits: [],
 selectedMonth: new Date(),
 onChangeSelectedMonth: (e) => {
 }
});

export const HabitContextProvider = (props) => {
 const [selectedDay, setSelectedDay] = useState(new Date());
 const [habits, setHabits] = useState([]);

 useEffect(() => {
  fetch(`https://localhost:7027/Hobby?year=${selectedDay.getFullYear()}&month=${selectedDay.getMonth() + 1}`)
   .then(e => e.json()).then(result => {
   setHabits(result.habits);
   console.log(result.habits);
  });
 }, [selectedDay])

 const changeSelectedMonth = (date) => {
  setSelectedDay(date);
 }


 return (
  <HabitContext.Provider value={(
   {
    habits: habits,
    selectedMonth: selectedDay,
    onChangeSelectedMonth: changeSelectedMonth,
   })}>{props.children}</HabitContext.Provider>
 );
};

export default HabitContext;