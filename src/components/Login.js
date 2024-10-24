// components/Login.js
import React, { useState } from "react";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false); // State to toggle login/register

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="login-container">
      {/* Toggle between Login and Register */}
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {isRegister && (
        // Additional input for registration
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      )}

      <button onClick={handleLogin}>
        {isRegister ? "Register" : "Log In"}
      </button>

      {/* Button to switch between Login and Register */}
      <button className="toggle-btn" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Go to Login" : "Go to Register"}
      </button>
    </div>
  );
}

export default Login;
