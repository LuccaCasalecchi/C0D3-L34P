import React from 'react';
import './styles.css';

 const  Button = ({
  title,
  type,
  mode,
  ...rest
}) =>{
  return(
    <button className={mode} type={type} {...rest}>{title}</button>
  )
}

export default Button;