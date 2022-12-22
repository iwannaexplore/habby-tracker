import React, {useState} from "react";


const popupContext = React.createContext({
  isPopupVisible: false,
  targetHabit: null,
  onChangePopupVisibility: (habit, isVisible) => {
  }
});

export const PopupContextProvider = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [targetHabit, setTargetHabit] = useState({});


  const changePopupVisibility = (habit, isVisible) => {
    setTargetHabit(habit);
    setIsPopupVisible(isVisible);
  }

  return (<popupContext.Provider
    value={{
      isPopupVisible: isPopupVisible,
      targetHabit: targetHabit,
      onChangePopupVisibility: changePopupVisibility,
    }}
  >
    {props.children}
  </popupContext.Provider>);
};

export default popupContext;
