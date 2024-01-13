//React Imports
import React, { useState, useEffect } from 'react'
import { FaUsers, FaAddressBook } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5"
//Components Import
import IncrementalCountCard from '../../components/IncrementalCountCard/IncrementalCountCard';
import AdminCard from '../../components/AdminCard/AdminCard'
//CSS Import
import './AdminHomepage.css'

const AdminHomepage = () => {
    //FOR ADMIN OPTION CARDS
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);
    useEffect(() => {

        // After a delay, show Component 2
        const timeout1 = setTimeout(() => {
            setShowComponent2(true);
        }, 500); // 2000 milliseconds delay

        // After another delay, show Component 3
        const timeout2 = setTimeout(() => {
            setShowComponent3(true);
        }, 1000); // 4000 milliseconds delay

        // Clear timeouts to avoid memory leaks
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, []);

    return (
        <div className='admin_dashboard-hero-container'>
            <section>
                <div class="container-fluid">
                    <div class="admin-block-main-heading-container" style={{ display: "flex", justifyContent: "center" }}>
                        <h1 id="admin_block-main-heading">WELCOME TO ADMIN BLOCK</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="div_all-counter-containers" style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "50px" }}>
                                <IncrementalCountCard
                                    totalCount={100} intervalDuration={10} label={"Happy Customers"}
                                    image_path={require('../../components/assets/customer_records.png')} />
                                <IncrementalCountCard
                                    totalCount={100} intervalDuration={10} label={"Cars In Garage"}
                                    image_path={require('../../components/assets/car_records.png')} />
                                <IncrementalCountCard
                                    totalCount={100} intervalDuration={10} label={"Current Commissions"}
                                    image_path={require('../../components/assets/booking_records.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ display: 'flex', gap: '40px', marginLeft: '14%' }}>
                    <AdminCard
                        page_link={"user_records"} icon={<FaUsers color='white' size={130} />} title={'User Records'}
                    />
                    {showComponent2 &&
                        <AdminCard page_link={"car_records"} icon={<IoCarSportSharp color='white' size={130} />} title={'Car Records'}
                        />}
                    {showComponent3 &&
                        <AdminCard page_link={"booking_records"} icon={<FaAddressBook color='white' size={100} />} title={'Booking Records'}
                        />}
                </div>
            </section>
        </div>
    )
}

export default AdminHomepage