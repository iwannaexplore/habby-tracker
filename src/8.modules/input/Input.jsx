import React, {useState} from 'react';

const Input = ({value, onChangeHandler, onFocusHandler, label, id, type}) => {
  console.log(value);
  return (
    <div className="popup__input__container">
    <label htmlFor={label + id} className="popup__label">{label}</label>
    <input type={type} id={label + id} className="popup__input" onChange={onChangeHandler}
           onFocus={() => onFocusHandler(false)} defaultValue={value}/>
  </div>);
};

export default Input;