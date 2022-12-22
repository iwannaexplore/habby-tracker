import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HabitContextProvider} from "./1.context/habitContext.js";
import {PopupContextProvider} from "./1.context/popupContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HabitContextProvider>
      <PopupContextProvider>
        <App/>
      </PopupContextProvider>
    </HabitContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
