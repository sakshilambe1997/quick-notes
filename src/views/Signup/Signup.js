import React, { useState } from 'react'
import toast from 'react-hot-toast';
import "./Signup.css"
import Navbar from "./../../components/Navbar/Navbar.js"

function Signup() {
    
    const [user,setUser]=useState({
        fullName:"",
        email:"",
        password:"",
        dob:""
})

const signup =()=>{
    const { fullName, email, password, dob } = user;

    if(!fullName && !email && !password && !dob){
        return(
            toast.error("Please Enter All Feilds")
        )
    }

    localStorage.setItem ("user",JSON.stringify(user));

    setTimeout(() => {
        toast.success("Signup Succesfully!!")
        toast.success("Signup Successfully!!")
          window.location.href="/login"
    },2000);

    setUser({
        fullName: "",
        email: "",
        password: "",
        dob: "",
      })
    
}
  return (
    <>
    <Navbar/>
 <div className='page-background-img'>
  
<div className='signup-container'>
   <h1 className='text-center text-primary'>Signup</h1>
   <input type='text'
   value={user.fullName}
   onChange={(e)=>{
    setUser({ ...user, fullName: e.target.value })}
   }
   placeholder='Fullname'
   className='input-box'
   ></input>
   <br></br>

   <input
   type='text'
   value={user.email}
   onChange={(e)=>{
    setUser({ ...user, email: e.target.value })}
   }
   placeholder='Email'
    className='input-box'
   ></input>

   <br></br>

<input
   type='text'
   value={user.password}
   onChange={(e)=>{
    setUser({ ...user, password: e.target.value })}
   }
   placeholder='Password'
    className='input-box'
   ></input>
   <br></br>

<input
   type='date'
   value={user.dob}
   onChange={(e)=>{
    setUser({ ...user, dob: e.target.value })}
   }
   placeholder='Password'
    className='input-box'
   ></input>

   <button type='button' className='btn btn-primary btn-1 signup-btn' onClick={signup}>Signup</button>
    </div>
    </div>
    
    </>
   
  )
}


export default Signup