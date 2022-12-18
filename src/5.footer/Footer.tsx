import React, {useContext} from 'react';
import habitContext from "../1.context/habitContext";

const Footer = () => {
  const context = useContext(habitContext);
  const addNewHabitHandler=()=>{
    context.onAddNewHabit("Dima", 12);
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