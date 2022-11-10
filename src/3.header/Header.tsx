import React from 'react';
import {GLOBAL_CONST} from "../global";
import './Header.css';
import Label from "./Label";
import DropDown from "./dropdown/DropDown";

const Header = () => {
 let accountName = "mustBeYourValue@gmail.com";
 return (
  <header className={"header"}>
   <Label/>
   <DropDown className={"about"}
             text={"How it works"}
             popupElements={[`How to use ${GLOBAL_CONST.appName}`, "Why set goals", "When to archive a goal"]}/>
   <DropDown className={"account"}
             text={accountName}
             popupElements={["Settings", "Exit"]}/>

  </header>
 );
};

export default Header;