import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import Feed from './components/Feed';
import ProfilePage from './components/ProfilePage';
import NewsSidebar from './components/NewsSidebar';  // Import the NewsSidebar
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Briana Mendez',
      title: 'AI Engineer @ OpenAI',
      time: '1 hour ago',
      content: 'Exciting read! 🚀 Just came across this article on how AI is now being used to create personalized virtual dreams capes...',
      avatar: 'https://imgcdn.stablediffusionweb.com/2024/5/16/b58ae580-d409-447d-910a-4d90c0657778.jpg',
      image: 'https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-1200-80.jpg',
      likes: 12,
      comments: 5,
      reposts: 2
    },
    {
      id: 2,
      user: 'Luca Gomez',
      title: 'Software Developer @ Google',
      time: '5 hours ago',
      content: 'Just finished a new tutorial on JavaScript async functions. Check it out!',
      avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701150350/JavaScript-Tutorial-copy.webp',
      likes: 8,
      comments: 2,
      reposts: 1
    },
    {
      id: 3,
      user: 'Alex Rodriguez',
      title: 'Data Scientist @ Amazon',
      time: '12 hours ago',
      content: 'AI is going to change the world! Here’s how machine learning models are transforming industries...',
      avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556512.png',
      image: '',
      likes: 15,
      comments: 3,
      reposts: 4
    }
  ]);

  // "About" section state (stored globally)
  const [aboutText, setAboutText] = useState('Write something about yourself here...');

  // Function to add a new user post
  const addNewPost = (newPostContent) => {
    const newPost = {
      id: posts.length + 1,
      user: 'David Denis',   // Current user
      title: 'CS Student @ UF',
      time: 'Just now',
      content: newPostContent,
      avatar: 'https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png',
      image: null,  // No image for user-created posts for now
      likes: 0,
      comments: 0,
      reposts: 0
    };

    setPosts([newPost, ...posts]);  // Add the new post to the top of the posts array
  };

  // Function to handle sharing a post
  const handleSharePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, reposts: post.reposts + 1 };  // Increase the repost count
      }
      return post;
    });
    const sharedPost = posts.find(post => post.id === postId);
    const newPost = { 
      ...sharedPost, 
      id: posts.length + 1, 
      time: 'Just now', 
      sharedBy: 'David Denis'  // Mark this post as shared by David Denis
    };

    setPosts([newPost, ...updatedPosts]);  // Add the shared post and update the reposts count
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-body">
          <ProfileSidebar />

          <div className="main-content">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Feed 
                    posts={posts} 
                    addNewPost={addNewPost} 
                    handleSharePost={handleSharePost}  // Pass the share handler
                  />
                } 
              />
              {/* Pass the filtered posts and aboutText to the ProfilePage */}
              <Route 
                path="/profile" 
                element={
                  <ProfilePage 
                    userPosts={posts.filter(post => post.user === 'David Denis' || post.sharedBy === 'David Denis')}  // Show posts shared or created by David Denis
                    aboutText={aboutText} 
                    setAboutText={setAboutText} 
                  />
                } 
              />
            </Routes>
          </div>

          {/* Add the NewsSidebar */}
          <NewsSidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
