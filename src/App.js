import './App.css';
import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';
import Start from "./pages/Start";
import Booking from "./pages/Booking";
import SignIn from "./pages/SignIn";
import WaitList from "./pages/WaitList";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Start} />
        <Route path="/booking" component={Booking} />
        <Route path="/signin" component={SignIn} />
        <Route path="/waitlist" component={WaitList} />
        <Route path="/profile" component={Profile} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);