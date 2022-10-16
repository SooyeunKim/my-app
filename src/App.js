import './App.css';
import './index.css';
import React from 'react';
import ReactDOM  from 'react-dom';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';
import Start from "./pages/Start";
import SearchList from "./pages/SearchList";
import SearchMap from "./pages/SearchMapTry";
import WaitList from "./pages/WaitList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/searchlist" element={<SearchList/>} />
        <Route path="/searchmap" element={<SearchMap />} />
        <Route path="/waitlist" element={<WaitList/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  )
}

// root.render(<App />);