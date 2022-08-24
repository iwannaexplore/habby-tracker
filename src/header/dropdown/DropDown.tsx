import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import PopupContent from "./PopupContent";

const DropDown = ({className, text, popupElements}:{className:string, text:string,popupElements:string[]}) => {
 return (
  <div className={className}>
     <span>{text}
      <FontAwesomeIcon icon={solid('caret-down')}/>
     </span>
   <PopupContent popupElements={popupElements}/>
  </div>
 );
};

export default DropDown;