import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import habitContext from "../1.context/habitContext";

const MonthRoll = ({date}: { date: Date }) => {
 const context = useContext(habitContext);
 let longMonth = date.toLocaleString('en-us', {month: 'long'});

 const changeMonthHandler = (isNext: boolean) => {
  let newDate = new Date(date);
  console.log("hello");
  if (isNext) {
   newDate.setMonth(newDate.getMonth() + 1);
  } else {
   newDate.setMonth(newDate.getMonth() - 1);
  }
  context.onChangeSelectedMonth(newDate);
 }

 return (
  <div className={"month__roll"}>
   <a className={"icon"} href="#"> <FontAwesomeIcon icon={solid("angle-left")} onClick={() => changeMonthHandler(false)}/>
   </a>
   <p>{`${longMonth}, ${date.getFullYear()}`}</p>
   <a className={"icon"} href="#"><FontAwesomeIcon icon={solid("angle-right")} onClick={() => changeMonthHandler(true)}/></a>
  </div>
 );
};

export default MonthRoll;