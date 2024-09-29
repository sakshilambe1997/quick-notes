import React, { useState } from 'react'
import toast from 'react-hot-toast';

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
        window.location.href="/"
    },3000);

    setUser({
        fullName: "",
        email: "",
        password: "",
        dob: "",
      })
    


}
  return (
    <>

<div>
   <h1 className='text-center text-primary'>Signup</h1>
   <input type='text'
   value={user.fullName}
   onChange={(e)=>{
    // setUser(...user,fullName.target.value)
    setUser({ ...user, fullName: e.target.value })}
   }
   placeholder='Fullname'
   className='input box'
   ></input>

   <input
   type='text'
   value={user.email}
   onChange={(e)=>{
    // setUser(...user,email.target.value)
    setUser({ ...user, email: e.target.value })}
   }
   placeholder='Email'
   ></input>

<input
   type='text'
   value={user.password}
   onChange={(e)=>{
    // setUser(...user,password.target.value)
    setUser({ ...user, password: e.target.value })}
   }
   placeholder='Password'
   ></input>

<input
   type='date'
   value={user.dob}
   onChange={(e)=>{
    // setUser(...user,dob.target.value)
    setUser({ ...user, dob: e.target.value })}
   }
   placeholder='Password'
   ></input>

   <button type='button' className='btn ' onClick={signup}></button>
    </div>
    
    </>
   
  )
}


export default Signup