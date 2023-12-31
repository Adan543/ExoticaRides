import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import LandingScreenVideo from '../assets/LandingScreen_video.mp4'
import CollagePic1 from '../assets/about_us-1.jpg'
import CollagePic2 from '../assets/about_us-2.jpg'
import CollagePic3 from '../assets/about_us-3.jpg'
import './Homepage2.css'


const Homepage2 = () => {
  return (
    <div className='main-container'>
      <NavBar className='navbar_landingScreen'/>
      {/* LANDING SCREEN */}
      <section className="Landing_screen-hero-container">
        <div className='Landing_screen-main-container'>
          <video className="Landing_screen-BackgroundVideo" autoPlay muted preload='auto'>
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
              <p style={{ color: 'white' }}>&copy; 2023 ExoticaRides LLC | All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US SCREEN */}
      <section>
        <div className="About_Us-main-container" style={{ marginTop: '50px' }}>
          <div className="container-fluid">
            <div className="each_section-top-heading-container">
              <h1>ABOUT <span style={{ color: '#05c1ae' }}>US</span></h1>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" style={{height:'500px', overflow:"hidden"}}>
                      <img src={CollagePic1} class="d-block w-100" alt="..." style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={CollagePic2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={CollagePic3} class="d-block w-100" alt="..."/>
                    </div>
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