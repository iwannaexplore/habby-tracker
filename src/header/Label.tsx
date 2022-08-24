import React from 'react';
import {GLOBAL_CONST} from "../global";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular} from "@fortawesome/fontawesome-svg-core/import.macro";

const Label = () => {
 return (
  <a href={GLOBAL_CONST.link}>
   <div className={"label"}>
    {GLOBAL_CONST.appName}
    <FontAwesomeIcon icon={regular("clock")}/>
   </div>
  </a>
 );
};

export default Label;