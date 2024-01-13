import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({className = ""}) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${className}`}>
                <div className='navbar_logo-container' style={{marginLeft: "20px"}}>
                    <Link className="navbar-brand" to="/homepage">
                    <img src={require('../assets/ExoticaRidesLogo.png')} alt="" className='Company_logo-nav'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse navbar_links-hero-container" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto gulu">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/homepage">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/viewcars">Garage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bookings">Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/records">Records</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar