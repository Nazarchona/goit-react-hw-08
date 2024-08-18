import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </header>
);

export default AppBar;



