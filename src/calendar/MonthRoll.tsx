import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const MonthRoll = ({date}:{date:Date}) => {
 let longMonth = date.toLocaleString('en-us', { month: 'long' });
 return (
  <div className={"month__roll"}>
   <FontAwesomeIcon icon={solid("angle-left")}/>
   <p>{`${longMonth}, ${date.getFullYear()}`}</p>
   <FontAwesomeIcon icon={solid("angle-right")}/>
  </div>
 );
};

export default MonthRoll;