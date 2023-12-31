import React, { useState } from 'react'
import './LoginSignUp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import videoBg from '../assets/haha.mp4'
import FirstNameIcon from '../assets/firstname.png'
import LastNameIcon from '../assets/lastname.png'
import EmailIcon from '../assets/email.png'
import PassWordIcon from '../assets/password.png'

// import { Link } from 'react-router-dom'
import * as LS from "./LoginSignUp-controller"


const LoginSignUp = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({
        

        fname:'',
        lname:'',
        email:'',
        password:'',
    }) 
    const handleChange = (event)=>{
        
        setData({...data,[event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://localhost:8080/user/createuser', { data })
            .then((res) => {
                if (res.status === 200) {
                    alert(res.data);
                    
                    LS.SignUpToLogin();
                }
                
            })
            .catch((error) => {
                
                alert(error.response.data);
            });
    };
    const handleloginSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:8080/user/loginauth', { data })
            .then((res) => {
                if (res.status === 200) {
                    navigate('/homepage')
                }
                
            })
            .catch((error) => {
                alert(error.response.data);
            });
    
    }
    

    return (
        <div className='LoginSignUp_hero-container'>
            <div className="container-fluid">
                <div className="row">
                    <div className="LoginSignUp-main-container col-lg-12">
                        <video className='LoginPage_BackgroundVideo' autoPlay muted>
                            <source src={videoBg} type='video/mp4' />
                        </video>
                        <div className="row LoginSignUp_page_content-container">
                            <div className='Page_left-content-container col-lg-6'>
                                <div className="main_heading-container">
                                    <h1 className='exotica_rides-main-heading-css'>Exotica Rides</h1>
                                    <h3 className='exotica_rides-main-heading-css' id='exotica_rides-sub-heading'>Unleash Your Inner Voyager, Drive Exotic.</h3>
                                </div>
                            </div>
                            <div className="Page_right-content-container col-lg-6">
                                {/* THIS IS LOGIN FORM CODE */}
                                <div className="LoginForm-main-container" id="LoginForm">
                                    <div className="LoginForm_header">
                                        <h1>Login Now</h1>
                                    </div>
                                    <div className="LoginForm_input-fields-container">
                                        <form onSubmit={handleloginSubmit}>
                                            <div className="LoginForm-input-field">
                                                <label htmlFor="/">Email Address</label>
                                                <div className='form_input-field-container'>
                                                    <img src={EmailIcon} alt="" className='icon' />
                                                    <input type="email" name='email' placeholder='Enter Here' onChange = {handleChange} required/>
                                                </div>
                                            </div>
                                            <div className="LoginForm-input-field">
                                                <label htmlFor="/">Password</label>
                                                <div className="form_input-field-container">
                                                    <img src={PassWordIcon} alt="" className='icon' />
                                                    <input type="password" name = 'password' placeholder='Enter Here' onChange = {handleChange} required/>
                                                </div>
                                            </div>
                                            {/* </form> */}
                                        <div className="login_btn-container" style={{ marginBottom: '10px' }}>
                                            {/* <Link to="/homepage" className='LoginSignUp_BTN btn-grad' type='submit' onSubmit={handleloginSubmit}>Login</Link> */}
                                            <button className='LoginSignUp_BTN btn-grad' type='submit'>Login</button>
                                        </div>
                                        </form>
                                        <div className="questionOR-container">
                                            <hr style={{ width: '80px', borderColor: '#bdc4d7' }} />
                                            <h5 style={{ fontFamily: 'COmfortaa, sans serif', padding: '5px 10px 0px', color: 'white' }}>OR</h5>
                                            <hr style={{ width: '80px', borderColor: '#bdc4d7' }} />
                                        </div>
                                        <div className="signup_option-container" style={{ display: 'flex', fontFamily: 'Comfortaa, sans serif', fontSize: '18px' }}>
                                            <p style={{ color: 'white' }}>Don't have an account?</p>
                                            <span href='#' className='SignUp_a-link' id='linkSignup' onClick={LS.LoginToSignUp}>Sign Up</span>
                                        </div>
                                    </div>
                                </div>
                                {/* LOGIN FORM CODE ENDS HERE */}

                                {/* THIS IS SIGN UP FORM CODE */}
                                <div className="LoginForm-main-container form--hidden" id='SignupForm' style={{ height: '93%', overflow: 'hidden' }}>
                                    <div className="LoginForm_header">
                                        <h1 style={{ fontSize: '52px' }}>Signup Now</h1>
                                    </div>
                                    <div className="LoginForm_input-fields-container SignForm_input-fields-container-tweaks">
                                        <form onSubmit={handleSubmit}>
                                            <div className="LoginForm-input-field">
                                                <label htmlFor="/" className='signUp_form-label-tweaks'>First Name</label>
                                                <div className='form_input-field-container'>
                                                    <img src={FirstNameIcon} alt="" className='icon' />
                                                    <input type="text" placeholder='Enter Here' name = 'fname' className='signUp_form-input-tweaks'onChange = {handleChange} required />
                                                </div>
                                            </div>
                                            <div className="LoginForm-input-field">
                                                <label htmlFor="/" className='signUp_form-label-tweaks'>Last Name</label>
                                                <div className="form_input-field-container">
                                                    <img src={LastNameIcon} alt="" className='icon' />
                                                    <input type="text" placeholder='Enter Here' name = 'lname' className='signUp_form-input-tweaks'onChange = {handleChange} required />
                                                </div>
                                            </div>
                                            <div className="LoginForm-input-field">
                                                <label htmlFor="/" className='signUp_form-label-tweaks'>Email Address</label>
                                                <div className="form_input-field-container">
                                                    <img src={EmailIcon} alt="" className='icon' />
                                                    <input type="email" placeholder='Enter Here' name='email' className='signUp_form-input-tweaks' onChange = {handleChange} required />
                                                </div>
                                            </div>
                                            <div className="LoginForm-input-field">
                                                <label htmlFor="/" className='signUp_form-label-tweaks'>Password</label>
                                                <div className="form_input-field-container">
                                                    <img src={PassWordIcon} alt="" className='icon' />
                                                    <input type="password" placeholder='Enter Here' name = 'password' className='signUp_form-input-tweaks' onChange = {handleChange} required />
                                                </div>
                                            </div>
                                        {/* </form> */}
                                        <div className="login_btn-container">
                                            <button className='LoginSignUp_BTN btn-grad' type='submit'>Signup Now</button>
                                        </div>
                                        </form>
                                        <div className="questionOR-container">
                                            <hr style={{ width: '80px', borderColor: '#bdc4d7' }} />
                                            <h6 style={{ fontFamily: 'Comfortaa, sans serif', padding: '5px 5px 0px 5px', color: 'white' }}>OR</h6>
                                            <hr style={{ width: '80px', borderColor: '#bdc4d7' }} />
                                        </div>
                                        <div className="signup_option-container" style={{ display: 'flex', fontFamily: 'Comfortaa, sans serif', fontSize: '17px' }}>
                                            <p style={{ color: 'white' }}>Already have an account?</p>
                                            <span className='SignUp_a-link' id='linkLogin' onClick={LS.SignUpToLogin} >Log In</span>
                                        </div>
                                    </div>
                                </div>
                                {/* SIGN UP FORM CODE ENDS HERE */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LoginSignUp