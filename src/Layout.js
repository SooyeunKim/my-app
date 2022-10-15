import React from 'react';
import { Outlet, Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </div>

  )
};

export default navbar;