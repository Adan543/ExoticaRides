import React from 'react'
import { useState,useEffect } from 'react'
import NavBar from '../../components/Navbar/Navbar'
import LandingScreenVideo from '../assets/LandingScreen_video.mp4'
import './Homepage.css'
import axios from 'axios';


const Homepage = () => {
  // const [data,setData] = useState("")
  // const getData=async()=>{
  //   const resp  = await axios.get('http://localhost:8080/user/getuser')
  //   if(resp){    setData(resp.data)}
  //   else{
  //     setData("lion")
  //   }

  // }

  // useEffect(()=>{
  //   getData()
  // },[])
// useEffect(()=>{
//   fetch('http://localhost:8080/user/getuser')
//   .then(res=>res.json())
//   .then(data => setData(data))
//   .catch(err => console.log(err))
// })

  return (
    <div>
      <NavBar className='navbar_landingScreen'/>
      {/* LANDING SCREEN */}
      <section className="Landing_screen-hero-container">
        <div className='Landing_screen-main-container'>
          <video className="Landing_screen-BackgroundVideo" autoPlay muted preload='auto'>
            <source src={LandingScreenVideo} type="video/mp4" />
          </video>
          <div className="Landing-screen-content-container">
            <div className="landing_screen-heading-container">
              <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>Welcome,</h1>
              <h1>hello</h1>
            </div>
            <div className="Landing-screen_button-container">
              <button className="landing_screen-get-started">
                <span aria-hidden="true" className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Get Started</span>
              </button>
            </div>
            <div className="copyright">
              <p>Content from ExoticaRides LLC, including its affiliates, is for general information only. None of the provided information is intended as investment advice. Use the company's website information at your own risk; the company assumes no responsibility or liability for any use or misuse of such information.</p>
              <p style={{ color: 'white' }}>&copy; 2023 ExoticaRides LLC | All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US SCREEN */}
    </div>
  );
};


export default Homepage