import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../App.css";
import Profile from "./Profile";
import data from '../data.json';

export default function SignIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = data
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
  // ]
 
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info, loop through each
    for (var i=1; i<database.length+1; i++) {
      const userData = database.find((user) => user[String(i)]["username"] === uname.value); //change 1 to i or smth

      // Compare user info
      if (userData) {
        if (userData[String(i)]["password"] !== pass.value) { //change 1 to i or smth
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } 
        else {
          setIsSubmitted(true);
          window.open("/profile", "_self");
        }
      } 
      else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div><Profile/></div> : renderForm}
      </div>
    </div>
  );
}