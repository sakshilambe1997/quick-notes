import React from 'react'
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Navbar.css"
import LogoImg from "./logo.png"

function Navbar() {
  return (
  <>

        <div className="menu-container">
        <img src={LogoImg} className='logo-img'/>
          <div className='menu-item-container'>
         
            <Link to="/" className="menu-img-item">Home</Link>
            <Link to="/about" className="menu-img-item">About</Link>
            <Link to="/login" className="menu-img-item">Login</Link>
            <Link to="/signup" className="menu-img-item">Signup</Link>
            </div>
            <div>
            <span className="menu-img-item" onClick={()=>{
              localStorage.clear();
              toast.success("Logged out Successfully!!")

              setTimeout(()=>{
              window.location.href="/login";
              },2000);
            }}>Logout</span>
            
            </div>

          </div>
    
    </>
  )
}

export default Navbar