import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [Data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value
    });
  };

  const goToSignIn = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/signUp`, Data);
      if (response.status === 200) {
        console.log("Success:", response.data);
        alert("Signup successful");
        setData({ name: "", email: "", password: "" });
        navigate('/');
      }
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        padding: "40px 30px",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        width: "90%",
        maxWidth: "400px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444" }}>Name</label>
            <input
              type="text"
              name="name"
              value={Data.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444" }}>Email</label>
            <input
              type="email"
              name="email"
              value={Data.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444" }}>Password</label>
            <input
              type="password"
              name="password"
              value={Data.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none"
              }}
            />
          </div>

          <button type="submit" style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#388e3c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "15px"
          }}>
            Sign Up
          </button>

          <div style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
            Already have an account?&nbsp;
            <span onClick={goToSignIn} style={{
              color: "#1976d2",
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "underline"
            }}>
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
