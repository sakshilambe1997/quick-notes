import React, { useState } from 'react';
import './Login.css';
import toast,{ Toaster } from 'react-hot-toast';
 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Save email and password to local storage
    if(!email && !password){
       return(
        toast.error("Please Enter Email & Password")
       )
    }
     localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    toast.loading("Redirecting to Dashboard..")
    setTimeout(() => {
      window.location.href="/"
    },3000);
  };

  return (
    <>
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

        <button className='btn btn-primary btn:hover btn-1' onClick={handleLogin}>Login</button>

    </div>
    </div>

    <Toaster/>
    </>
 
  );
}

export default Login;