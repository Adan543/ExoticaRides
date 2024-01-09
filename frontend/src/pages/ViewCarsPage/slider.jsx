import React, { useState } from 'react';
import Slider from 'react-slider';
import Navbar from '../../components/Navbar/Navbar'
import './ViewCars.css'
import viewCarBG from '../assets/viewCar.jpg'

const ViewCars = () => {
  const [minValue, setMinValue] = useState(2000);
  const [maxValue, setMaxValue] = useState(2024);

  const handleSliderChange = (values) => {
    const [minVal, maxVal] = values;
    setMinValue(minVal);
    setMaxValue(maxVal);
  };
  
  const handleMinInputChange = (event) => {
  const value = parseInt(event.target.value, 10);
  if (!isNaN(value)) {
    setMinValue(value);
  }
};

const handleMaxInputChange = (event) => {
  const value = parseInt(event.target.value, 10);
  if (!isNaN(value)) {
    setMaxValue(value);
  }
};

const handleMinInputBlur = () => {
  if (minValue >= maxValue) {
    setMinValue(maxValue-1);
  }
};

const handleMaxInputBlur = () => {
  if (maxValue <= minValue) {
    setMaxValue(minValue+1);
  }
};

  return (
    <div>
      <div className="main_head-container">
        <div className="background-image-container">
          <img src={viewCarBG} alt="Background" />
        </div>
        <Navbar />
        <div className="heading_content-container">
          <h1>Find Your <span style={{color: '#05c1ae'}}>Drive</span>.</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8" style={{ backgroundColor: 'pink' }}>dadadda</div>
          <div className="col-lg-4" style={{ padding: '80px' }}>
            <div className="filter_card-hero-container">
              <div className="filter_fields-container">
                <label htmlFor="/">Car Name</label>
                <input type="text" placeholder='Search by name' />
              </div>
              <div className="filter_fields-container">
                <div>
                  <label>Min Value:</label>
                  <input type="text" value={minValue} onChange={handleMinInputChange} onBlur={handleMinInputBlur} />
                </div>
                <div>
                  <label>Max Value:</label>
                  <input type="text" value={maxValue} onChange={handleMaxInputChange} onBlur={handleMaxInputBlur} />
                </div>
                <Slider
                  className='Slider_css'
                  min={2000}
                  max={2024}
                  step={1}
                  value={[minValue, maxValue]}
                  onChange={handleSliderChange}
                  withBars
                />
                <div>
                  <p>Min Value: {minValue}</p>
                  <p>Max Value: {maxValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCars









{/* <div className="row" style={{marginTop:'50px'}}>
<div className="col-lg-12" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
  <div className="test" ref={ref} {...events}> 
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
    <img src={require('../assets/lamborghini_logo.png')} alt="" className='car-brand-logo'/>
  </div>
</div>
</div> */}