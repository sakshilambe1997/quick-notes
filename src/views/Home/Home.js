import React from 'react'
import "./Home.css"
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


const Features=[
  {
    featureImg:"https://s3.wns.com/S3_5/Images/GenericHeaderBanner/MobileImg/19087/3093/Security-TRAC-Mobile-568x568px.jpg",
    featureText:"Notes will be saved securely in your browsers local storage"
  },
  
  {
    featureImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLjw8PZ-2qnylEvOrTHkqkBhoSwOds0I3oA&s",
    featureText:"Use your brain for thinking , not for remembering things"
  },
  {
    featureImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNCkiiQdfEK4shgjZl-Wf_bb-T-zpHadywg&s",
    featureText:"Loved by 100 + users. feedbacks are always welcome!"
  }
]

function Home() {
  return (
   <>
   <Navbar/>

    <img src="https://img.freepik.com/free-photo/flay-lay-beautiful-crown-concept_23-2148693214.jpg"className='home-head-background-img'/>

   <div className='home-heading-division'>
   <h1 className='text-center text-primary app-title' >📘 Quick Note</h1>
   <p className='text-center subheading' >Your Pocket friendly app. Never Forget anything again! &nbsp;
   <span className='text-highlight tagline-highlight'>Remember everything! 🧠</span></p>
   </div>
  
   <h3 className='text-center why-should-heading'>Why you should use Quick Note?</h3>
   

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
    <button className='btn text-white btn-primary add-note-butn btn1-position'>✍ Add Note</button>
    </Link>

    <Link to="/show">
    <button className=' btn btn-secondary text-white btn2-position  show-note-btn'>📖 Show Note</button>
    </Link>
   </div>

  <Footer/>
   
   </>
  )
}

export default Home