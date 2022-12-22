import React from 'react';
import './App.css';
import Header from "./3.header/Header";
import CalendarContainer from "./4.calendar/CalendarContainer";
import Footer from "./5.footer/Footer";
import Popup from "./6.popup/Popup.jsx";

function App() {
  return (
    <>
      <div style={{margin: "3vh 4.5vw"}}>
        <Header/>
        <CalendarContainer/>
        <Footer/>
      </div>
      <Popup/>
    </>
  );
}

export default App;
