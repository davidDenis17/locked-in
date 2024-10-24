// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileSidebar from "./components/ProfileSidebar";
import Feed from "./components/Feed";
import ProfilePage from "./components/ProfilePage";
import NewsSidebar from "./components/NewsSidebar";
import Login from "./components/Login"; // Import the new Login component
import "./App.css";

function App() {
  // State for user login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example state for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Briana Mendez",
      title: "AI Engineer @ OpenAI",
      time: "1 hour ago",
      content:
        "Exciting read! 🚀 Just came across this article on how AI is now being used to create personalized virtual dreamscapes...",
      avatar:
        "https://imgcdn.stablediffusionweb.com/2024/5/16/b58ae580-d409-447d-910a-4d90c0657778.jpg",
      image:
        "https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-1200-80.jpg",
      likes: 12,
      comments: 5,
      reposts: 2,
    },
    // Other posts...
  ]);

  // About section state
  const [aboutText, setAboutText] = useState(
    "Write something about yourself here..."
  );

  // Function to add a new post
  const addNewPost = (newPostContent) => {
    const newPost = {
      id: posts.length + 1,
      user: "David Denis",
      title: "CS Student @ UF",
      time: "Just now",
      content: newPostContent,
      avatar:
        "https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png",
      image: null,
      likes: 0,
      comments: 0,
      reposts: 0,
    };
    setPosts([newPost, ...posts]);
  };

  // Function to handle sharing a post
  const handleSharePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, reposts: post.reposts + 1 };
      }
      return post;
    });
    const sharedPost = posts.find((post) => post.id === postId);
    const newPost = {
      ...sharedPost,
      id: posts.length + 1,
      time: "Just now",
      sharedBy: "David Denis",
    };
    setPosts([newPost, ...updatedPosts]);
  };

  // If user is not logged in, show login screen only
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  // Main content when logged in
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
                    handleSharePost={handleSharePost}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProfilePage
                    userPosts={posts.filter(
                      (post) =>
                        post.user === "David Denis" ||
                        post.sharedBy === "David Denis"
                    )}
                    aboutText={aboutText}
                    setAboutText={setAboutText}
                  />
                }
              />
            </Routes>
          </div>

          <NewsSidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
