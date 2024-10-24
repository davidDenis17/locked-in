import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side: App Name and Creators */}
      <div className="navbar-left">
        <h1 className="app-name">LockedIn</h1>
        <p className="creators">
          Created by David Denis, Oscar Delapresa, Leonardo Cobaleda (Team 4)
        </p>
      </div>

      {/* Middle: Search Bar */}
      <div className="navbar-center">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      {/* Right Side: Home Button */}
      <div className="navbar-right">
        <Link to="/" className="home-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
