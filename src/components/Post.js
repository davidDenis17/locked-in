import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

function Post({ user, title, time, content, avatar, image, likes, comments, reposts, handleShare, sharedBy }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Handle the "Like" button click
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setCommentList([...commentList, { text: newComment, avatar: 'https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png' }]);
      setNewComment('');  // Clear the input field after submitting the comment
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img 
          src={avatar} 
          alt="User" 
          className="user-pic" 
        />
        <div>
          <h4>{user}</h4>
          <p>{title}</p>
          <p>{time}</p>
          {sharedBy && <p className="shared-by">Shared by {sharedBy}</p>}  {/* Display shared by info if available */}
        </div>
      </div>
      <p>{content}</p>
      {image && <img src={image} alt="Post Content" className="post-image" />}

      {/* Interaction buttons: Likes, Comments, Shares */}
      <div className="post-interactions">
        <button className="interaction-button" onClick={handleLike}>
          <FontAwesomeIcon icon={faThumbsUp} /> Like {likeCount > 0 && <span>({likeCount})</span>}
        </button>
        <button className="interaction-button">
          <FontAwesomeIcon icon={faComment} /> Comment ({commentList.length})
        </button>
        <button className="interaction-button" onClick={handleShare}>
          <FontAwesomeIcon icon={faShare} /> Share {reposts > 0 && <span>({reposts})</span>}
        </button>
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <form onSubmit={handleCommentSubmit}>
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          <button type="submit" className="comment-submit-btn">Send</button>
        </form>

        {/* Display list of comments */}
        <div className="comment-list">
          {commentList.map((comment, index) => (
            <div key={index} className="comment-item">
              <img 
                src={comment.avatar} 
                alt="Commenter Avatar" 
                className="comment-avatar" 
              />
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
