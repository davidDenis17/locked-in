import React from 'react';
import Post from './Post';
import PostCreation from './PostCreation';
import './Feed.css';

function Feed({ posts, addNewPost, handleSharePost }) {
  return (
    <div className="feed-layout">
      <div className="feed">
        <h2 className="feed-title">News Feed</h2>
        <PostCreation addNewPost={addNewPost} />  {/* Pass addNewPost function */}

        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <Post 
                {...post} 
                handleShare={() => handleSharePost(post.id)}  // Pass the handleSharePost function
                sharedBy={post.sharedBy}  // Pass the "sharedBy" field if it exists
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
