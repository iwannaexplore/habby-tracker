import React, {useContext} from 'react';
import PopupContext from "../1.context/popupContext";

const Footer = () => {
  const context = useContext(PopupContext);
  const addNewHabitHandler=()=>{
    context.onChangePopupVisibility(null, true);
  }
  return (
    <div className="footer">
      <button className="new-habit" onClick={addNewHabitHandler}>
        + New Habit
      </button>
    </div>
  );
};

export default Footer;