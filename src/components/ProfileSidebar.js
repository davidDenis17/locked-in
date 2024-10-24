import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileSidebar.css';

function ProfileSidebar() {
  return (
    <div className="profile-sidebar">
      <Link to="/profile" className="profile-link">
        <img 
          src="https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png" 
          alt="User" 
          className="profile-pic" 
        />
        <h3>David Denis</h3>
        <p>CS Student at University of Florida | Software Developer</p>
      </Link>
      <p><i className="icon-location"></i> Gainesville, FL</p>
      <p>Connections: <strong>432</strong></p>
      <p>Profile Viewers: <strong>34</strong></p>
      <button className="saved-items-btn">Saved items</button>
    </div>
  );
}

export default ProfileSidebar;
