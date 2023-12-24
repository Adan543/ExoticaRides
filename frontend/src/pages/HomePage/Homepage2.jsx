import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import LandingScreenVideo from '../assets/LandingScreen_video.mp4'
import CollagePic1 from '../assets/main_collage-pic.jpg'
import CollagePic2 from '../assets/steering_pic.jpg'
import CollagePic3 from '../assets/brake_caliper.jpg'
import './Homepage2.css'

const Homepage2 = () => {
  return (
    <div className='main-container'>
      <NavBar />
      {/* LANDING SCREEN */}
      <section className="Landing_screen-hero-container">
        <div className='Landing_screen-main-container'>
          <video className="Landing_screen-BackgroundVideo" autoPlay muted>
            <source src={LandingScreenVideo} type="video/mp4" />
          </video>
          <div className="Landing-screen-content-container">
            <div className="heading_container">
              <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>Welcome,</h1>
              <h1>Jawwad Kareem</h1>
            </div>
            <div className="LS_button-container">
              <button className="learn-more">
                <span aria-hidden="true" className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Get Started</span>
              </button>
            </div>
            <div className="copyright">
              <p>Content from ExoticaRides LLC, including its affiliates, is for general information only. None of the provided information is intended as investment advice. Use the company's website information at your own risk; the company assumes no responsibility or liability for any use or misuse of such information.</p>
              <p style={{color:'white'}}>&copy; 2023 ExoticaRides LLC | All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US SCREEN */}
      <section>
        <div className="About_Us-main-container" style={{ marginTop:'50px' }}>
          <div className="container-fluid">
            <div className="each_section-top-heading-container">
              <h1>ABOUT <span style={{color: '#05c1ae'}}>US</span></h1>
            </div>
            <div className="row">
              <div className="col-lg-6 About_us-section-left-container">
                <p>Step into ExoticaRides, where we blend luxury with your drive in the coolest way imaginable. Our remarkable fleet showcases a mix of chic sports cars, robust SUVs, and sophisticated sedans that don't just transport you from one place to another but transform every journey into an exceptional adventure. At ExoticaRides, we're not just about car rentals; we're here to curate an experience that stays with you.
                  <br />
                  Choosing a car with us goes beyond merely selecting a vehicle; it's about crafting memories that linger. From handpicking your dream car to hitting the road with a grin, ExoticaRides is your partner in turning driving dreams into a tangible reality. We don't just rent cars; we create moments that are unique and exhilarating.
                  <br />
                  What distinguishes ExoticaRides is our unwavering commitment to ensuring every facet of your experience is nothing short of amazing. We are dedicated to offering not just a car but an entire atmosphere that radiates coolness and excitement. Come join us at ExoticaRides, where each drive is an invitation to encounter something extraordinary, where luxury meets the road, and let's reshape how you perceive and relish car rentals. So, fasten your seatbelt and prepare for a ride unlike any other!</p>
              </div>
              <div className="col-lg-6 About_us-section-right-container"
               style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'15px'}}>
                <div className="lamba_div">
                  <img src={CollagePic1} alt="" style={{width:'100%', height:'500px'}}/>
                </div>
                <div className="chote_wale-div-container">
                  <div className="choti_image">
                    <img src={CollagePic2} alt=""  style={{width:'100%', height:'200px', marginBottom:'10px'}}/>
                  </div>
                  <div className="bari_ima" style={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                    <img src={CollagePic3} alt=""  style={{width:'95%', height:'350px'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};


export default Homepage2