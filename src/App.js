import './App.css';
import './index.css';
import React from 'react';
import ReactDOM  from 'react-dom';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';
import Start from "./pages/Start";
import Booking from "./pages/Booking";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WaitList from "./pages/WaitList";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/waitlist" element={<WaitList/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  )
}

// root.render(<App />);