import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const MonthRoll = () => {
 return (
  <div className={"month__roll"}>
   <FontAwesomeIcon icon={solid("angle-left")}/>
   {/*Todo add real month here*/}
   <p>August, 2022</p>
   <FontAwesomeIcon icon={solid("angle-right")}/>
  </div>
 );
};

export default MonthRoll;