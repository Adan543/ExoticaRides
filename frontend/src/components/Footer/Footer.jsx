import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagramSquare, FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    const redirectToLink = (link) => {
        window.location.href = link;
    };

    return (
        <div>
            <footer>
                <div className="row footer_row">
                    <div className="footer_col-6 col-lg-6">
                        <img src={require('../assets/ExoticaRidesLogo.png')} alt="" className='Company_logo'/>
                        <p>The content, design, and branding of ExoticaRides are the intellectual property of our company. Unauthorized use, reproduction, or distribution of any materials without prior written consent is strictly prohibited. ExoticaRides is a registered trademark, and any infringement will be subject to legal action. Thank you for respecting our intellectual property.</p>
                        <h6>© 2024 ExoticaRides Car Rental. All rights reserved.</h6>
                    </div>
                    <div className="footer_col-2 col-lg-2">
                        <h3>Links</h3>
                        <ul>
                            <li className="footer_li">
                                <Link className="footer-nav-link" to="/homepage">Home</Link>
                            </li>
                            <li className="footer_li">
                                <Link className="footer-nav-link" to="/viewcars">Garage</Link>
                            </li>
                            <li className="footer_li">
                                <Link className="footer-nav-link" to="/bookings">Booking</Link>
                            </li>
                            <li className="footer_li">
                                <Link className="footer-nav-link" to="/records">Records</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_col-4 col-lg-4">
                        <h3>Contact Us</h3>
                        <div className="footer_email-contact-container">
                            <div className="footer_contact-container" >
                                <img src={require('../assets/call.png')} alt="" />
                                <h6 style={{ marginLeft: "3px" }}>+92-315-2539534</h6>
                            </div>
                            <div className="footer_contact-container">
                                <img src={require('../assets/email.png')} alt="" />
                                <h6>mmuk0603@gmail.com</h6>
                            </div>
                        </div>
                        <div className="footer_social-links-container" style={{ marginTop: "30px" }}>
                            <h5>Our Socials</h5>
                            <div className="footer_social-links">
                                <FaInstagramSquare
                                    className="social-icons"
                                    size={30}
                                    onClick={() => redirectToLink('https://www.instagram.com/exoticarides/')}
                                />
                                <FaTwitter
                                    className="social-icons"
                                    size={30}
                                    onClick={() => redirectToLink('https://twitter.com/exoticarides/')}
                                />
                                <FaDiscord
                                    className="social-icons"
                                    size={30}
                                    onClick={() => redirectToLink('https://www.facebook.com/exoticarides/')}
                                />
                                <FaFacebook
                                    className="social-icons"
                                    size={30}
                                    onClick={() => redirectToLink('https://www.facebook.com/exoticarides/')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer