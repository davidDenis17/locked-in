import React from 'react';
import './UserProfile.css';

function UserProfile() {
  return (
    <div className="user-profile">
      <img 
        src="https://img.freepik.com/free-icon/user_318-159711.jpg" 
        alt="User Profile" 
        className="profile-pic-large" 
      />
      <h2>David Smith</h2>
      <p>CS Student at University of Florida</p>
      <p>Software Developer at Crcl</p>
      <div className="profile-details">
        <h3>Experience</h3>
        <p>Software Developer at Crcl</p>
        <p>Programming Tutor at UF</p>
        <h3>Education</h3>
        <p>B.S. in Computer Science from University of Florida</p>
      </div>
    </div>
  );
}

export default UserProfile;
