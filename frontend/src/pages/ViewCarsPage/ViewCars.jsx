import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ViewCars.css'
import viewCarBG from '../assets/viewCar.jpg'
import { useState } from 'react';

const ViewCars = () => {
  let [a, setA] = useState('Initial Value');
  const getValue = (element) => {
    a = element.value;
    setA(a);
  };

  return (
    <div>
      <div className="main_head-container">
        <div className="background-image-container">
          <img src={viewCarBG} alt="Background" />
        </div>
        <Navbar />
        <div className="heading_content-container">
          <h1>Find Your <span style={{ color: '#05c1ae' }}>Drive</span>.</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div>
          <input type="range" id="volume" name="volume" min="2000" max="2023" onChange={() => console.log(getValue(document.getElementById("volume")))}/>
          <label htmlFor="volume">Volume</label>
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default ViewCars