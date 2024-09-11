import React from 'react'
import "./HomeButton.css"
import { Link } from 'react-router-dom'
import HomeImg from "./../../assets/home.png"

function HomeButton() {
  return (
    <div>
        <Link to="/home">
      <img src={HomeImg} className='home-img'/>
      </Link>

    </div>
  )
}

export default HomeButton