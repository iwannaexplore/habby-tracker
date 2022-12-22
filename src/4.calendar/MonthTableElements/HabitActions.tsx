import React, {useContext} from 'react';
import habitContext from "../../1.context/habitContext";
import popupContext from "../../1.context/popupContext";
import Habit from "../../2.entities/Habit";

const HabitActions = ({habit}:{habit: Habit}) => {
  let hContext = useContext(habitContext);
  let pContext = useContext(popupContext);

  const editHandler = function () {
    pContext.onChangePopupVisibility(habit,true)
  }

  const deleteHandler = function () {
    hContext.onDeleteHabit(habit.id);
  }

  return (
    <div className="habit-actions">
      {/*  <span role="img" aria-label="menu" className="anticon">
          <svg viewBox="64 64 896 896" focusable="false"
               data-icon="menu" width="17"
               height="17" className="svg-sm-icon"
               fill="currentColor" aria-hidden="true">
            <path
              d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0
               624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4
               0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
            </path>
          </svg>
        </span>*/}
      <span className="anticon" onClick={editHandler}>
          <svg
            className="svg-sm-icon" width="20" height="20"
            viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path
             d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88
          8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3
           17.25V21H6.75L17.81 9.94L14.06 6.19Z">
            </path>
          </svg>
      </span>
      <span className="anticon" onClick={deleteHandler}>
          <svg className="svg-sm-icon" fill="currentColor" height="20"
               viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m16 9v10h-8v-10zm-1.5-6h-5l-1 1h-3.5v2h14v-2h-3.5zm3.5 4h-12v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z">
          </path>
          </svg>
        </span>
      {/*      <span className="anticon">
          <svg className="svg-sm-icon" width="20" height="20"
               viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57
               3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24
                5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z">
            </path>
          </svg>
        </span>*/}
    </div>);
};

export default HabitActions;