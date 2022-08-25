import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const DayProgress = ({isCompleted}: { isCompleted: boolean }) => {
//Todo get colors from database
 //Todo add border changing
 let color = "cell-color-one";
 return (
  <td>
   <div className={`default__cell center__flex__content ${color}`}>
    {isCompleted ? <FontAwesomeIcon icon={solid("check")}/> : ""}
   </div>
  </td>
 );
};

export default DayProgress;