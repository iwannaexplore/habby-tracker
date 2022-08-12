import React from 'react';
import './App.css';
import {GLOBAL_CONSTS} from "./global"
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
 let week = ["M","T","W","T","F","S","S"];
 let monthWeekDayNames = week.concat(week.concat(week.concat(week)));
 let monthDaysNumber = Array.from(Array(28).keys());
 let emptyFields = Array.from({length: 28}, (_, i) => " ")
 return (
  <>
   <header className={"header"}>
    <a href="/">
     <div className={"label"}>
      {GLOBAL_CONSTS.appName}
      <FontAwesomeIcon icon={regular("clock")}/>
     </div>
    </a>
    <div className={"about"}>
     <span>How it works
      <FontAwesomeIcon icon={solid('caret-down')}/>
     </span>
     <ul className={"popup__content"}>
      <li className={"popup__element"}>How to use {GLOBAL_CONSTS.appName}</li>
      <li className={"popup__element"}>Why set goals</li>
      <li className={"popup__element"}>When to archive a goal</li>
     </ul>
    </div>

    <div className={"account"}>
     <span>iwannaexplore@gmail.com      <FontAwesomeIcon icon={solid('caret-down')}/>
</span>
     <ul className={"popup__content"}>
      <li className={"popup__element"}>Settings</li>
      <li className={"popup__element"}>Exit</li>
     </ul>
    </div>

   </header>
   <section className={"calendar__container"}>
    <div className={"month__roll"}>
     <FontAwesomeIcon icon={solid("angle-left")}/>
     <p>August, 2022</p>
     <FontAwesomeIcon icon={solid("angle-right")}/>
    </div>
    <table className={"whole__month__table"}>
     <tr>
      <td rowSpan={2} style={{border:"none"}} ><div className={"without__border"}>Habits</div></td>
      {monthWeekDayNames.map((e)=><td><div  className={"weekDayName"}>{e}</div></td>)}
     <td rowSpan={2}><div className={"without__border"}>Goal</div></td>
     <td rowSpan={2}><div className={"without__border"}>Archive</div></td>
     </tr>
     <tr>
      {monthDaysNumber.map((e)=><td>{e}</td>)}
     </tr>
     <tr>
      <td>Eat pussy</td>
      {emptyFields.map((e)=><td>{e}</td>)}
     </tr>
     <tr>
      <td>Suck balls</td>
      {emptyFields.map((e)=><td>{e}</td>)}
     </tr>
     <tr>
      <td></td>
     </tr>
  
    </table>

   </section>
   <footer>
    pussy
   </footer>
  </>
 );
}

export default App;
