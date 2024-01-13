import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './AdminHomepage.css'
import AdminCard from '../../components/AdminCard/AdminCard'

const AdminHomepage = () => {
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);
    useEffect(() => {

        // After a delay, show Component 2
        const timeout1 = setTimeout(() => {
            setShowComponent2(true);
        }, 1500); // 2000 milliseconds delay

        // After another delay, show Component 3
        const timeout2 = setTimeout(() => {
            setShowComponent3(true);
        }, 3000); // 4000 milliseconds delay

        // Clear timeouts to avoid memory leaks
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, []);

    return (
        <div className='admin_dashboard-hero-container'>
            <Navbar />
            <section>
                <div class="container-fluid">
                    <div class="admin-block-main-heading-container" style={{ display: "flex", justifyContent: "center" }}>
                        <h1 id="admin_block-main-heading">WELCOME TO ADMIN BLOCK</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="div_all-counter-containers" style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "50px" }}>
                                <div class="each_count-container" style={{ marginTop: "10px"}}>
                                    <img src={require('../assets/customer.png')} alt="" style={{ maxHeight: "90px",  zIndex:"1", position:'relative' }} />
                                    <div id="count_data-container">
                                        <h1 id="customer-count-h1">0</h1>
                                        <h4 style={{ color: "white", fontFamily: "'Comfortaa', cursive" }}>
                                            Happy Customers
                                        </h4>
                                    </div>
                                </div>
                                <div class="each_count-container" style={{ marginTop: "10px" }}>
                                    <img src={require('../assets/admin-car.png')} alt="" style={{ maxHeight: "90px",  zIndex:"1", position:'relative' }} />
                                    <div id="count_data-container">
                                        <h1 id="customer-count-h1">0</h1>
                                        <h4 style={{  color: "white", fontFamily: "'Comfortaa', cursive" }}>
                                            Cars In Garage
                                        </h4>
                                    </div>
                                </div>
                                <div class="each_count-container" style={{ marginTop: "10px" }}>
                                    <img src={require('../assets/admin-car.png')} alt="" style={{ maxHeight: "90px", zIndex:"1", position:'relative' }} />
                                    <div id="count_data-container">
                                        <h1 id="customer-count-h1">0</h1>
                                        <h4 style={{  color: "white", fontFamily: "'Comfortaa', cursive" }}>
                                            Cars In Garage
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{display:'flex', gap:'40px', marginLeft:'15%'}}>
                    <AdminCard page_link={"user_records"}/>
                    {showComponent2 && <AdminCard page_link={"car_records"}/>}
                    {showComponent3 && <AdminCard page_link={"booking_records"}/>}
                </div>
            </section>
        </div>
    )
}

export default AdminHomepage