import React from 'react';
import Button from '../Button/index';
import './styles.css';
import { connect, useDispatch } from "react-redux";
import { deletePost } from "../../actions/index";

const ModalDelete =(props)=>{
  const dispatch = useDispatch();
  const showHideClassName = props.show ? "modal display-block" : "modal display-none"

  return(
    <div className={showHideClassName}>
      <div className="container-modal">
      <h2>Are you sure you want to delete this item?</h2>
      <div className="buttons">
        <Button title="Cancel" mode="outlined"/>
        <Button 
        title="OK" 
        mode="outlined"
        onClick={()=>dispatch(deletePost(props.idItem))}
        />
      </div>
      </div>
    </div>
  )
}

export default connect()(ModalDelete);