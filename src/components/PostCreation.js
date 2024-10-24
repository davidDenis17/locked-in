import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMicrophone, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './PostCreation.css';

function PostCreation({ addNewPost }) {
  const [postContent, setPostContent] = useState('');

  // Handle the input change
  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  // Handle post submission
  const handlePostSubmit = (e) => {
    e.preventDefault();  // Prevent form refresh
    if (postContent.trim()) {
      addNewPost(postContent);  // Pass the post content to the parent component (Feed)
      setPostContent('');  // Clear the input field after submitting the post
    } else {
      alert('Please write something to post.');
    }
  };

  return (
    <div className="post-creation">
      <div className="post-creation-header">
        <img 
          src="https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png" 
          alt="User" 
          className="user-pic" 
        />
        <input
          type="text"
          placeholder="Start a post"
          className="post-input"
          value={postContent}
          onChange={handleInputChange}
        />
      </div>

      <div className="post-options">
        <button className="post-option-btn">
          <FontAwesomeIcon icon={faImage} /> Media
        </button>
        <button className="post-option-btn">
          <FontAwesomeIcon icon={faMicrophone} /> Voice
        </button>
        <button className="post-option-btn">
          <FontAwesomeIcon icon={faCalendar} /> Calendar
        </button>
        <button className="post-submit-btn" onClick={handlePostSubmit}>
          Post
        </button>
      </div>
    </div>
  );
}

export default PostCreation;
