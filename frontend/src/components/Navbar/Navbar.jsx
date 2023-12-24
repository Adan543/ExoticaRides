import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar_landingScreen">
                <div className='navbar_logo-container' style={{marginLeft: "20px"}}>
                    <Link class="navbar-brand" to="/homepage">ExoticaRides</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse navbar_links-hero-container" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto gulu">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/homepage">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/viewcars">Garage</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/bookings">Booking</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/records">Records</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar