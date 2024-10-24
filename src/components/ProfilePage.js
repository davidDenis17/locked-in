import React, { useState } from 'react';
import Post from './Post';
import './ProfilePage.css';

function ProfilePage({ userPosts, aboutText, setAboutText }) {
  const [isEditing, setIsEditing] = useState(false);  // Editing state for the About section

  // Handle changes to the About section text
  const handleAboutChange = (e) => {
    setAboutText(e.target.value);  // Update the global aboutText state
  };

  // Toggle between edit and save modes
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-banner"></div>
        <div className="profile-info">
          <img 
            src="https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png" 
            alt="Profile" 
            className="profile-pic" 
          />
          <div className="profile-details">
            <h2>David Denis</h2>
            <p>CS Student at University of Florida | Aspiring Software Engineer & iOS Developer | Passionate About Building Innovative Solutions</p>
            <p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXx_Swgc9Qoq5mghLb9c_AktVZSvebmo1NBQ&s" 
                alt="UF Logo" className="uf-logo" /> 
              University of Florida
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="profile-section about">
        <h3>About</h3>
        {isEditing ? (
          <textarea 
            value={aboutText}
            onChange={handleAboutChange}
            className="about-textarea"
          />
        ) : (
          <p>{aboutText}</p>
        )}
        <button className="edit-about-btn" onClick={toggleEditMode}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      {/* User's Posts Section (Same Structure as Feed) */}
      <div className="profile-section user-posts">
        <h3>Your Posts</h3>
        {userPosts.length > 0 ? (
          <div className="posts-container">
            {userPosts.map((post) => (
              <div key={post.id} className="post-card">
                <Post {...post} />
              </div>
            ))}
          </div>
        ) : (
          <p>You haven't posted anything yet.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
