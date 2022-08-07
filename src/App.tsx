import React from 'react';
import './App.css';
import {GLOBAL_CONSTS} from "./global"

function App() {
 return (
  <>
   <header className={"header"}>
    <div className={"label"}>{GLOBAL_CONSTS.appName}</div>
    <div className={"about"}>How it works
     <ul className={"about__content"}>
      <li className={"about__element"}>How to use {GLOBAL_CONSTS.appName}</li>
      <li className={"about__element"}>Why set goals</li>
      <li className={"about__element"}>When to archive a goal</li>
     </ul>
    </div>

    <div className={"account"}>iwannaexplore@gmail.com
     <ul className={"account__content"}>
      <li className={"account__element"}>Settings</li>
      <li className={"account__element"}>Exit</li>
     </ul>
    </div>

   </header>
   <section>
    I am here too
   </section>
   <footer>
    pussy
   </footer>
  </>
 );
}

export default App;
