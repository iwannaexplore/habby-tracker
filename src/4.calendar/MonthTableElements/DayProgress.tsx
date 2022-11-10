import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import CalendarDay from "../../2.entities/CalendarDay";
import habitContext from "../../1.context/habitContext";

const DayProgress = ({dayProgress, habitId, changeHabitDay}: { dayProgress: CalendarDay, habitId: number,changeHabitDay:Function }) => {
 let context = useContext(habitContext);

 let color = "cell-color-one";
 let borderClass = dayProgress.isMustBeHighlighted ? "highlightedBorder" : "";
 const changeProgressHandler = function () {
  context.onChangeStateOfDay(dayProgress.date, habitId, !dayProgress.isCompleted);
  changeHabitDay(dayProgress.date,!dayProgress.isCompleted);
 }

 return (
  <td className={borderClass} onClick={changeProgressHandler}>
   {dayProgress.isCompleted ?
    <div className={`default__cell center__flex__content ${color}`}>
     <FontAwesomeIcon icon={solid("check")}/>
    </div> :
    <div className={`default__cell center__flex__content`}>
    </div>
   }
  </td>
 );
};

export default DayProgress;