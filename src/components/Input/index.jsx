import React from "react";
import './styles.css';

 const Input = ({
  label,
  idName,
  placeholder,
  ...rest
}) => {
  return (
    <div className="input-block">
      <label htmlFor={idName}>{label}</label>
      <input id={idName} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default Input;