import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../App.css";
import SignIn from "./SignIn";
import data from '../data.json';

export default function SignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // [
    //   {
    //       "1": {
    //           "username": "leanne",
    //           "password": "kim"
    //       },
    //       "2": {
    //           "username": "sean",
    //           "password": "wang"
    //       }
    //   }
    // ]}
    // store uname.value and pass.value in database
    console.log(data);
    // data.set("3", {
    //   "username": uname.value, 
    //   "password": pass.value
    // })
    //put this in json file

    window.open("/profile", "_self");
        
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <p align="left">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username: </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password: </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <p align="center">
          <input className="waitListAddButton" type="submit" />
        </p>
      </form>
    </p>
  );

  return (
    <p align="center">
      <br/>
      <div className="signin-item">
        <div className="login-form">
          <div className="title">Sign Up</div>
          {isSubmitted ? <div><SignIn/></div> : renderForm}
        </div>
      </div>
    </p>
  );
}