import React, {useEffect, useState} from "react";
import Habit from "../2.entities/Habit";
import habit from "../2.entities/Habit";

const appUrl = "https://localhost:7027";


//before sending date from js to c# we need to increment dayNumber, because in c# after
//transformation we will get dayNumber-1
const convertDateToCSharpFormat = (date) => {
  let convertedDate = new Date(date);
  convertedDate.setDate(date.getDate() + 1);
  return convertedDate;
}

const habitContext = React.createContext({
  habits: [], selectedMonth: new Date(), onChangeSelectedMonth: (e) => {
  }, onChangeStateOfDay: (date, habitId, isCompleted) => {
  },
});

export const HabitContextProvider = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch(appUrl + `/Hobby?year=${selectedDate.getFullYear()}&month=${selectedDate.getMonth() + 1}`)
      .then((e) => e.json())
      .then((result) => {
        setHabits(convertHabits(result.habits));
      });

  }, [selectedDate]);

  const convertHabits = (habitsWithoutType) => {
    let resultHabits = [];
    for (const habit of habitsWithoutType) {
      resultHabits.push(new Habit(habit.id, habit.name, habit.days, habit.goal, habit.achieved))
    }
    return resultHabits;
  }


  const changeSelectedMonth = (date) => {
    setSelectedDate(date);
  };

  const changeStateOfDay = (date, habitId, isCompleted) => {
    let convertedDate = convertDateToCSharpFormat(date);
    fetch(appUrl + "/Hobby/ChangeStateOfDay", {
      method: "Post", headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
      }, body: JSON.stringify({date: convertedDate, habitId})
    }).then(() => {
      // setSelectedDate(date);
    });
  };

  return (<habitContext.Provider
    value={{
      habits: habits,
      selectedMonth: selectedDate,
      onChangeSelectedMonth: changeSelectedMonth,
      onChangeStateOfDay: changeStateOfDay,
    }}
  >
    {props.children}
  </habitContext.Provider>);
};

export default habitContext;
