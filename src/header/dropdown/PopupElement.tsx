import React from 'react';

const PopupElement = ({children}:{children:string}) => {
 return (
  <li className={"popup__element"}>{children}</li>
 );
};

export default PopupElement;