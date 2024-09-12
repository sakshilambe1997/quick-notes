import React, { useState } from 'react'
import "./Add.css"
import EmojiPicker from 'emoji-picker-react';

import HomeButton from '../../components/HomeButton/HomeButton'
 

function Add() {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [category,setCategory]=useState("");
  const [emoji,setEmoji]=useState("");
  const [openEmojiDialog, setOpenEmojiDialog]=useState(false)

  return (
    <div>

      <h1 className='text-center text-primary'>✍ Add Note</h1>
      <HomeButton/>

      <form>
        <input
         type='text'
         placeholder='Title'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         className='user-input'/>

       <input
         type='text'
         placeholder='Description'
         value={description}
         onChange={(e)=>{
          setDescription(e.target.value)
         }}
         className='user-input'/>

        <select value={category} onChange={(e)=>{
          setCategory(e.target.value)}}
          className='user-input-select user-input'>
          <option value='shopping'>Shopping</option>
          <option value='work'>Work</option>
          <option value='personal'>Personal</option>
          <option value='learning'>Learning</option>
        </select>
    
        <div>
          {emoji}
          </div>
       

      <button type='button' onClick={()=>setOpenEmojiDialog(true)}
      >Select Emoji</button>

     <EmojiPicker
      open={openEmojiDialog}
       height={"300px"} 
        width={"400px"} 
        searchDisabled={true}
        skinTonesDisabled={true}
        onEmojiClick={(emojiobject)=>{
          setEmoji(emojiobject.emoji)
          setOpenEmojiDialog(false)
        }}/>  
     
     <button type='button'
     onClick={()=>{
      setTitle("");
     }}>Clear</button>
          


       
      </form>
    </div>
  )
}

export default Add