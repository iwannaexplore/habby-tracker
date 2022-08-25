import React from 'react';
import DayProgress from "./DayProgress";

const Habit = ({name}: { name: string }) => {
 let emptyFields = Array.from({length: 28}, (_, i) => true)
 return (
  <tr>
   <td className={"habits__col__name"}>{name}</td>
   {emptyFields.map((e) => <DayProgress isCompleted={e}/>)}
   <td>24</td>
   {/*Todo get values for Goal and Archieved from */}
   <td>12</td>
  </tr>
 );
};
//Todo add buttons
//Todo add popup that will appear from left to center
//Todo make habit days clickable
export default Habit;