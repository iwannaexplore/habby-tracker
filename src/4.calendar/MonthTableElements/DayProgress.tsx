import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import CalendarDay from "../../2.entities/CalendarDay";
import habitContext from "../../1.context/habitContext";

const DayProgress = ({dayProgress, habitId}: { dayProgress: CalendarDay, habitId: number }) => {
 let context = useContext(habitContext);
 const [day, setDay] = useState(dayProgress);

 useEffect(() => {
  setDay(dayProgress);
 }, [dayProgress])


 let color = "cell-color-one";
 let borderClass = day.isMustBeHighlighted ? "highlightedBorder" : "";
 const changeProgressHandler = function () {
  context.onChangeStateOfDay(day.date, habitId, !day.isCompleted);
  setDay(s => ({...s, isCompleted: !s.isCompleted}))
 }

 return (
  <td className={borderClass} onClick={changeProgressHandler}>
   {day.isCompleted ?
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