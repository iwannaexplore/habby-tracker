import React, {useContext, useEffect, useState} from 'react';
import habitContext from "../1.context/habitContext";
import popupContext from "../1.context/popupContext";

const Popup = () => {
  let hContext = useContext(habitContext);
  let pContext = useContext(popupContext);

  const [errorVisibility, setErrorVisibility] = useState(false)
  useEffect(() => {
    setHabit(pContext.targetHabit);
  }, [pContext.targetHabit]);
  const [habit, setHabit] = useState(pContext.targetHabit);


  const closePopup = () => {
    pContext.onChangePopupVisibility(null, false);
  }

  const changeHobbyHandler = () => {
    if(habit && habit.name && habit.name.trim() && habit.goal){
      if (habit.id) {
        let newHabit = {id:habit.id, name: habit.name, goal: habit.goal};
        hContext.onChangeHabit(newHabit);
      } else {
        debugger
        let newHabit = { name: habit.name, goal: habit.goal};
        hContext.onAddNewHabit(newHabit);
      }
    }
    else {
      setErrorVisibility(true);
      return;
    }
    pContext.onChangePopupVisibility(null, false);
  }

  const onNameChangeHandler = (e) => {
    setHabit(prev=>({...prev, name:e.target.value}));
  }
  const onGoalChangeHandler = (e) => {
    setHabit(prev=>({...prev, goal:parseInt(e.target.value)}));
  }
  return (
    <div className="popup__background" style={{display: pContext.isPopupVisible ? "block" : "none"}}>
      <div className="popup__container">
        <div className="popup__header">
          <div className="popup__title">Create New Habit</div>
          <div className="popup__mark" onClick={closePopup}>
          <span role="img" aria-label="close" className="anticon">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="close"
                 width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7
                0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8
                 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7
                  0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8
                   0 10.5-7.9 6.1-13.1L563.8 512z">
              </path>
            </svg>
          </span>
          </div>
        </div>
        <div className="popup-body">
          <div className="popup__input__container">
            <label htmlFor="newHabitName" className="popup__label">Habit Name</label>
            <input type="text" id="newHabitName" className="popup__input" onChange={onNameChangeHandler}
                   onFocus={() => setErrorVisibility(false)} value={habit?habit.name:""}/>
          </div>
          <div className="popup__input__container">
            <label htmlFor="newHabitName" className="popup__label">Goal</label>
            <input type="number" id="newHabitGoal" className="popup__input" onChange={onGoalChangeHandler}
                   onFocus={() => setErrorVisibility(false)} value={habit?habit.goal:""}/>
          </div>
          {errorVisibility ? <p style={{color: "red", marginBottom:"10px"}}>Fill Goal and Habit name</p> : ""}
        </div>
        <div className="popup-bottom">
          <button className="popup__button" onClick={changeHobbyHandler}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;