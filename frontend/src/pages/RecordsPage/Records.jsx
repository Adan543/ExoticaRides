import React from 'react'
import './Records.css'
import Navbar from '../../components/Navbar/Navbar'

const Records = () => {

  return (
    <div className="div">
      <div className="car-card-hero-container">
        <div className="image-container" >
          <img src={require('../../components/assets/heh.png')}alt="" />
        </div>
        <div className="content-container">
          <h1>Porsche</h1>
          <h2>1300cc</h2>
          <button>Boo Now</button>
        </div>
      </div>
    </div>

  )
}

export default Records