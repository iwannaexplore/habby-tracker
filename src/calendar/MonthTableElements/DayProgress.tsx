import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const DayProgress = ({isCompleted, isMustBeHighlighted}:
                      { isCompleted: boolean, isMustBeHighlighted: boolean }) => {
 let color = "cell-color-one";
 let borderClass = isMustBeHighlighted ? "highlightedBorder" : "";
 return (
  <td className={borderClass}>
   {isCompleted ?
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