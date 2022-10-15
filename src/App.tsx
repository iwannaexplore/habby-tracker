import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./header/Header";
import CalendarContainer from "./calendar/CalendarContainer";

function App() {
 const [isLoggedIn, setIsLoggedIn] =
  useState(false);

 useEffect(() => {
  const isLoggedInFromLs = localStorage.getItem("isLoggedIn");
  console.log("ReloadEffect:" + isLoggedInFromLs);
  if (isLoggedInFromLs === "true") {
   setIsLoggedIn(true);
  }
 }, [])

 const loginHandler = () => {
  localStorage.setItem("isLoggedIn", String(true))
  setIsLoggedIn(true);
 };

 const logoutHandler = () => {
  setIsLoggedIn(false);
  localStorage.setItem("isLoggedIn", String(false))
 };

 return (
  <>
   <Header/>
   <CalendarContainer/>
   <footer>
    <label htmlFor="">Value: {String(isLoggedIn)}</label>
    <button onClick={loginHandler}>Login</button>
    <button onClick={logoutHandler}>Logout</button>
   </footer>
  </>
 );
}

export default App;
