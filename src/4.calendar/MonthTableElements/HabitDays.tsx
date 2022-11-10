import React, {useState} from 'react';
import DayProgress from "./DayProgress";
import CalendarMonth from "../../2.entities/CalendarMonth";
import Habit from "../../2.entities/Habit";
import Day from "../../2.entities/Day";


const HabitDays = ({habit, date}:
                     { habit: Habit, date: Date }) => {
  const [currentHabit, setCurrentHabit] = useState(habit);
  let allDaysForThisMonth = new CalendarMonth(date);
  for (const completedDay of currentHabit.days) {
    for (const calendarDay of allDaysForThisMonth.calendarDays) {
      if (calendarDay.date.getDate() === new Date(completedDay.date).getDate()) {
        calendarDay.isCompleted = completedDay.isCompleted;
      }
    }
  }

  const changeHabitDayHandler = function (date: Date, isCompleted: boolean) {
    setCurrentHabit(h => {
      if (h.days.filter(d => d.date.getDate() === date.getDate()).length) {
        let day = h.days.filter(d => d.date.getDate() === date.getDate())[0];
        day.isCompleted = isCompleted;
        console.log("true")
      } else {
        console.log("false")
        h.days.push(new Day(0, isCompleted, date, h.id))
      }
      h.achieved = h.days.filter(d=>d.isCompleted).length;
      return {...h};
    })
  }
  return (
    <tr>
      <td className={"habits__col__name"}>{currentHabit.name}</td>
      {allDaysForThisMonth.calendarDays.map((day) => {
        return <DayProgress key={day.date.getDate()} habitId={currentHabit.id} dayProgress={day}
                            changeHabitDay={changeHabitDayHandler}/>
      })}
      <td>{currentHabit.goal}</td>
      <td>{currentHabit.achieved}</td>
    </tr>
  );
};

export default HabitDays;