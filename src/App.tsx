import React, {useState} from 'react';
import './App.css';
import Header from "./3.header/Header";
import CalendarContainer from "./4.calendar/CalendarContainer";
import Popup from "./6.popup/Popup.jsx";
import Login from "./7.authorization/Login";
import {Link, Navigate, Route, Routes, useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let [isAuthorized, setIsAuthorized] = useState(false);
  if(!isAuthorized)
    navigate("/Login");

  return (
    <>
      <div style={{margin: "3vh 4.5vw"}}>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/calendar" element={<CalendarContainer />} />
          <Route path="*" element={<Navigate to="/calendar"/>}/>
        </Routes>
      </div>
      <Popup/>
    </>
  );
}

export default App;
