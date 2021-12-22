import React from "react";
import './styles.css';

const textArea = ({
  label,
  idName,
  placeholder,
  ...rest
}) =>{
  return(
    <div className="input-block">
      <label htmlFor="">{label}</label>
      <textarea id={idName} placeholder={placeholder} {...rest}></textarea>
    </div>
  )
}

export default textArea;