import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">LockedIn</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="navbar-right">
        <i className="icon-home"></i>
        <i className="icon-profile"></i>
        <i className="icon-settings"></i>
      </div>
    </nav>
  );
}

export default Navbar;
