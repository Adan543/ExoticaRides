import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import LandingScreenVideo from '../assets/LandingScreen_video.mp4'
import './Homepage.css'


const Homepage = () => {
  return (
    <div>
      <NavBar />
      <section className='landing_screen-hero-container'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12" style={{padding:'0', margin:'0'}}>
              <div className="video-container" >
                <video className="Landing_screen-BackgroundVideo" autoPlay muted>
                  <source src={LandingScreenVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Homepage