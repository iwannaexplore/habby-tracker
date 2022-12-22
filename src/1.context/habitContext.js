import React, {useEffect, useState} from "react";
import Habit from "../2.entities/Habit";
import Day from "../2.entities/Day";

const appUrl = "https://localhost:7027";


//before sending date from js to c# we need to increment dayNumber, because in c# after
//transformation we will get dayNumber-1
const convertDateToCSharpFormat = (date) => {
  let convertedDate = new Date(date);
  convertedDate.setDate(date.getDate() + 1);
  return convertedDate;
}
const convertHabit = (habit) => {
  let days = [];
  for (const day of habit.days) {
    days.push(new Day(day.id, day.isCompleted, new Date(day.date), day.habitId));
  }
  return new Habit(habit.id, habit.name, days, habit.goal, habit.days.filter(d => d.isCompleted).length);
}
const convertHabits = (habitsWithoutType) => {
  let resultHabits = [];
  for (const habit of habitsWithoutType) {
    resultHabits.push(convertHabit(habit))
  }
  return resultHabits;
}


const habitContext = React.createContext({
  habits: [], selectedMonth: new Date(), onChangeSelectedMonth: (e) => {
  }, onChangeStateOfDay: (date, habitId, isCompleted) => {
  }, onDeleteHabit: (habitId) => {
  }, onAddNewHabit: (name, goal) => {
  },
  onChangeHabit: (habit) => {
  }
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
    });
  };

  const deleteHabit = (habitId) => {
    fetch(appUrl + "/Hobby/DeleteHabit", {
      method: "Post", headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
      }, body: JSON.stringify(habitId)
    }).then(() => {
    });
    setHabits((prevState) => prevState.filter(elem => elem.id != habitId))
  }
  const addNewHabit = (habit) => {
    fetch(appUrl + "/Hobby/AddNewHabit", {
      method: "Post", headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
      }, body: JSON.stringify({name: habit.name, goal: habit.goal})
    }).then((habitJson) => {
      return habitJson.json()
    }).then(habit => {
        let convertedHabit = convertHabit(habit);
        setHabits(prevState => [...prevState, convertedHabit])
      }
    );
  }
  const changeHabit = (habit) => {
    fetch(appUrl + "/Hobby/ChangeHabit", {
      method: "Post", headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
      }, body: JSON.stringify({id: habit.id, name: habit.name, goal: habit.goal})
    }).then(() => setHabits(prev => prev.map(elem =>
      elem.id === habit.id ? {...elem, name: habit.name, goal: habit.goal} : elem
    )));
  };


  return (<habitContext.Provider
    value={{
      habits: habits,
      selectedMonth: selectedDate,
      onChangeSelectedMonth: changeSelectedMonth,
      onChangeStateOfDay: changeStateOfDay,
      onDeleteHabit: deleteHabit,
      onAddNewHabit: addNewHabit,
      onChangeHabit: changeHabit,
    }}
  >
    {props.children}
  </habitContext.Provider>);
};

export default habitContext;
