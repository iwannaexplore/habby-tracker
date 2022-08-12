import React from 'react';
import './App.css';
import {GLOBAL_CONSTS} from "./global"
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
 let week = ["M", "T", "W", "T", "F", "S", "S"];
 let monthWeekDayNames = week.concat(week.concat(week.concat(week)));
 let monthDaysNumber = Array.from(Array(28).keys());
 let emptyFields = Array.from({length: 30}, (_, i) => <FontAwesomeIcon icon={solid("check")}/>)
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
      <td rowSpan={2} style={{border: "none"}} className={"without__border"}>
       <div className={"habits__col__name_label center__flex__content"}>Habits</div>
      </td>
      {monthWeekDayNames.map((e) => <td>
       <div className={"weekdays__labels center__flex__content"}>{e}</div>
      </td>)}
      <td rowSpan={2} className={"without__border"}>
       <div className={"goal__col__label center__flex__content"}>Goal</div>
      </td>
      <td rowSpan={2} className={"without__border"}>
       <div className={"archive__col__label center__flex__content"}>Archive</div>
      </td>
     </tr>
     <tr>
      {monthDaysNumber.map((e) => <td><div className={"month__day center__flex__content"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Eat pussy</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-one"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Suck balls</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-two"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Work hard</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-three"}>{e}</div></td>)}
     </tr>
     <tr>
     <td className={"habits__col__name"}>Eat pussy</td>
     {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-four"}>{e}</div></td>)}
    </tr>
     <tr>
      <td className={"habits__col__name"}>Suck balls</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-five"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Work hard</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-six"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Work hard</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-seven"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Work hard</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-eight"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Work hard</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-nine"}>{e}</div></td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Work hard</td>
      {emptyFields.map((e) => <td><div className={"default__cell center__flex__content cell-color-ten"}>{e}</div></td>)}
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
