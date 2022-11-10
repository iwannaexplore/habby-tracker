import React from 'react';
import PopupElement from "./PopupElement";

const PopupContent = ({popupElements}:{popupElements:string[]}) => {
 return (
  <ul className={"popup__content"}>
   {popupElements.map(elem=><PopupElement key={elem}>{elem}</PopupElement>)}
  </ul>
 );
};

export default PopupContent;