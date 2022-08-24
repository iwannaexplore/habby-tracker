import React from 'react';
import './App.css';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Header from "./header/Header";

function App() {
 let week = ["M", "T", "W", "T", "F", "S", "S"];
 let monthWeekDayNames = week.concat(week.concat(week.concat(week)));
 let monthDaysNumber = Array.from(Array(28).keys());
 let emptyFields = Array.from({length: 29}, (_, i) => <FontAwesomeIcon icon={solid("check")}/>)
 return (
  <>
   <Header/>
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
       <div className={"archive__col__label center__flex__content"}>Archived</div>
      </td>
     </tr>
     <tr>
      {monthDaysNumber.map((e) => <td>
       <div className={"month__day center__flex__content"}>{e}</div>
      </td>)}
     </tr>
     <tr>
      <td className={"habits__col__name"}>Eat pussy</td>
      {emptyFields.map((e) => <td>
       <div className={"default__cell center__flex__content cell-color-one"}>{e}</div>
      </td>)}
      <td>12</td>
     </tr>
    </table>
   </section>
   <footer>
   </footer>
  </>
 );
}

export default App;
