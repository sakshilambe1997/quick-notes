import React, { useState } from "react";
import "./Login.css";
import toast from "react-hot-toast";
import Navbar from "./../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email && !password) {
      return toast.error("Please Enter Email & Password");
    }

    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser.email === email && currentUser.password === password) {
      toast.success("Login successful");
    } 
    
    else {
      toast.error("Invalid Credentials");
      return;
    }

    setTimeout(() => {
      toast.loading("Redirecting to Dashboard..");
      window.location.href = "/";
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="page-background-img">
        <div className="login-div">
          <h2 className="text-center text-primary">Login Page</h2>

          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            required
            className="input-box"
          ></input>
          <br></br>

          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Enter Password"
            className="input-box"
          ></input>

          <button
            className="btn btn-primary login-btn btn-1"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      <Footer />

     
    </>
  );
}

export default Login;
