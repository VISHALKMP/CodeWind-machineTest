import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/signIn`, data);
      if (response.status === 200) {
        alert("Login Successful");
        localStorage.setItem("token", response.data.token);
        navigate('/dash');
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  const goToSignUp = () => {
    navigate('/signUp');
  };

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e3f2fd",
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
        <h2 style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#333"
        }}>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444" }}>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{
                width: "90%",
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
              value={data.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              style={{
                width: "90%",
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
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "15px"
          }}>
            Login
          </button>

          <div style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
            Don't have an account?&nbsp;
            <span onClick={goToSignUp} style={{
              color: "#1976d2",
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "underline"
            }}>
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
