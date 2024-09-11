import React from 'react'
import "./Home.css"
import ImgSecure from "./secure.png"
import ImgHeart from "./heart.png"
import ImgBrain from "./human-brain.png"
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { Link } from 'react-router-dom'

const Features=[
  {
    featureImg:ImgSecure,
    featureText:"Notes will be saved securely in your browsers local storage"
  },
  
  {
    featureImg:ImgBrain,
    featureText:"Use your brain for thinking , not for remembering things"
  },
  {
    featureImg:ImgHeart,
    featureText:"Loved by 100 + users. feedbacks are always welcome!"
  }
]

function Home() {
  return (
   <>
   <h1 className='text-center text-primary app-title' >📘 Quick Note</h1>
   <p className='text-center'>Your Pocket friendly app. <del>Never Forget anything again!</del>
   <span className='text-highlight tagline-highlight'>Remember everything! 🧠</span></p>

   <h3 className='text-center'>Why you should use Quick Note?</h3>

   <div className='feature-container'>
   {
      Features.map((feature)=>{
        const {featureImg,featureText}=feature
        return(
          <FeatureCard
          featureImg={featureImg}
          featureText={featureText}
          />
        )
      })
    }

   </div>
   <div className='buttons-container'>
    <Link to="/add">
    <button className='btn btn-primary'>✍ Add Note</button>
    </Link>

    <Link to="/show">
    <button className=' btn btn-secondary'>📖 Show Note</button>
    </Link>
   </div>
   
   </>
  )
}

export default Home