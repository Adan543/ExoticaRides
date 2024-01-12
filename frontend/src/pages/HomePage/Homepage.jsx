import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Homepage.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Homepage = () => {
<<<<<<< HEAD
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
=======
  // axios.defaults.withCredentials = true
  const username = JSON.parse(sessionStorage.getItem('userData')).customer_name;
  console.log(JSON.parse(sessionStorage.getItem('userData')))
>>>>>>> 85c013bd93cd9d43451a18db7c15e543ecd9a700

  return (
    <div>
      {/* LANDING SCREEN */}
      <div className="homepage_landing-screen-main_container">
        <div className="homepage_background-video-container">
          <video className='homepage_video' autoPlay muted>
            <source src={require('../assets/LandingScreen_video.mp4')} />
          </video>
        </div>
        <Navbar className='navbar_viewcar' />
        <div className="Landing-screen-content-container">
            <div className="landing_screen-heading-container">
<<<<<<< HEAD
              <h1 style={{ fontSize: '42px', marginBottom: '25px'}}>Welcome,</h1>
              <h1>MUHIB ULLAH</h1>
=======
              <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>Welcome,</h1>
              <h1>{username}</h1>
>>>>>>> 85c013bd93cd9d43451a18db7c15e543ecd9a700
            </div>
            <div className="Landing-screen_button-container">
              <button className="landing_screen-get-started">
                <span aria-hidden="true" className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Get Started</span>
              </button>
            </div>
          </div>
      </div>
      {/* ABOUT US */}
      <div className="homepage_about_us-main-container">
        <div className="about_us-content-container">
          <div className="about_us-heading-container">
            <h1>OUR <span style={{color:"#05c1ae"}}>JOURNEY</span></h1>
          </div>
          <div className="about_us-details-container">
            <p>Welcome to Exotica Rides, where luxury and adventure converge on the open road. At Exotica Rides, we redefine the driving experience by offering a fleet of meticulously curated, high-performance vehicles that cater to the most discerning tastes. Whether you're seeking the thrill of a powerful sports car, the elegance of a luxury sedan, or the versatility of an SUV, Exotica Rides has the perfect ride for every occasion. <br />
              <br />
              Our commitment to excellence extends beyond the vehicles we provide. We take pride in delivering exceptional customer service, ensuring that your journey with Exotica Rides is as seamless and enjoyable as the cars we offer. Our team is dedicated to meeting and exceeding your expectations, making your car rental experience with us unforgettable. <br />
              <br />
            At Exotica Rides, we believe in more than just transportation; we believe in creating memories. Whether it's a weekend getaway, a special event, or a business trip, our fleet is designed to elevate every moment. Join us on the road to sophistication, style, and unparalleled driving pleasure. Your adventure begins with Exotica Rides—where every ride is an experience.
            </p>
            <h3>Elevating Journeys, Redefining Luxuries</h3>
          </div>
        </div>
        {/* USELESS AS MY LIFE */}
        <div className="about_us-image-container"></div>
      </div>
      <div className="Footer-hero-container">
        <Footer/>
      </div>
    </div>
  );
};


      export default Homepage