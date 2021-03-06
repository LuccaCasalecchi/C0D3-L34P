import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';

import logoCodeLeap from "../../assets/codeleap_logo_black.png";
import  Button  from "../../components/Button";
import  Input  from "../../components/Input";
import "./styles.css";

function SignUp(){
  const history = useHistory();
  const [loading,setLoading] = useState(true);
  const [username,setUsername] = useState("");

  useEffect(()=>{
    loadingSplash();
  },[]);

  function loadingSplash(){
    setTimeout(()=>{
      setLoading(false);
    },1500)
  }

  function handleSubmit(e){
    e.preventDefault();
    history.push({pathname:"/posts",state:{username}})
  }

  if(loading){
    return(
      <div id="splashcreen">
        <img className="logo" src={logoCodeLeap} alt="CodeLeap logo"/>
      </div>
    )
  }

  return(
    <div className="container">
      <main id="container-signup">
      <h1>Welcome to CodeLeap network!</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <Input
        label="Please enter your username"
        placeholder="JohnDoe"
        idName="name"
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        />

        <Button
        title="ENTER"
        type="submit"
        disabled={!username}
        mode="containedd"
        />
      </form>
      </main>
    </div>
  )
}

export default SignUp;