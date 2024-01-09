import React from 'react'
import './CarsCard.css'
import { Link } from 'react-router-dom'

const CarsCard = ({ car }) => {
    const { car_name, car_company, manufacture_year, engine_cc, image, car_type, car_rate } = car
    return (
        <div className='car-card'>
            <div className="car_card-hero-container">
                <div className="car_card-img-container">
                    <img src={require('../assets/heh.png')} alt="/" />
                </div>
                <div className="car_card-attributes-container">
                    <div className="car-card-name_brand-container">
                        <h5>{`${car_name}`}</h5>
                        <h4>{`${car_company}`}</h4>
                    </div>
                    <div className="car_card-all-details-container">
                        <div className='car_card_specific-detail-container'>
                            <img src={require('../assets/calendar.png')} alt="" />
                            <p style={{ color: "#05c1ae" }}>{`${manufacture_year}`}</p>
                        </div>

                        <div className='car_card_specific-detail-container'>
                            <img src={require('../assets/engine.png')} alt="" />
                            <p style={{ color: "#05c1ae" }}>{`${engine_cc}`}</p>
                        </div>
                        <div className='car_card_specific-detail-container'>
                            <img src={require('../assets/car-type.png')} alt="" />
                            <p style={{ color: "#05c1ae" }}>{`${car_type}`}</p>
                        </div>
                    </div>
                    <div className="car_card-price-rent_BTN-container" style={{ display: "flex", justifyContent: 'space-between', padding: '10px 15px' }}>
                        <div className="car_card-price-container" style={{marginTop:'7px'}}>
                            <h5>${`${car_rate}`}
                                <span style={{ color: 'white' }}>/</span>
                                <span style={{ fontSize: '10px', color: "white" }}>Day</span>
                            </h5>
                        </div>
                        <div className="car_card-rent_BTN-container">
                                <Link className="nav-link" to="/bookings" class="rent_now-BTN">Rent Now
                                    <span class="arrow_rent">
                                        <svg fill="rgb(5,194,174)" viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                                    </span>
                                </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarsCard