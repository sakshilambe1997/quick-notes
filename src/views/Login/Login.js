import React, { useState } from 'react';
import './Login.css';
import toast,{ Toaster } from 'react-hot-toast';
import Navbar from "./../../components/Navbar/Navbar.js"
import Footer from '../../components/Footer/Footer.js';

 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if(!email && !password){
       return(
        toast.error("Please Enter Email & Password")
       )
    }

    //  const currentUser=localStorage.getItem(JSON.parse(user))
    //  console.log(currentUser)

    
    setTimeout(() => {
      toast.success("Login Successfully!!")
      toast.loading("Redirecting to Dashboard..")
      window.location.href="/"
    },3000);
  };

  return (
    <>
    <Navbar/>
    <div className='page-background-img'>
    <div className='login-div'>
    <h2 className='text-center text-primary'>Login Page</h2>
    
        <input type='text' 
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        placeholder='Enter Email'
        required
        className='input-box'
        ></input>
        <br></br>

        
        <input type='text' value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        required
        placeholder='Enter Password'
         className='input-box'
        ></input>

        <button className='btn btn-primary login-btn btn-1' onClick={handleLogin}>Login</button>

    </div>
    </div>
    <Footer/>

    <Toaster/>
    </>
 
  );
}

export default Login;