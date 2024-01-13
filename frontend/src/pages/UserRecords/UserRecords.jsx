import React from 'react'
import './UserRecords.css'

const UserRecords = () => {
    const CustomerRecords = [
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' },
        { customer_name: 'Muhib', email: 'abc@gmail.com', address: 'ABC Road askdhaskjdqwjdwq', CNIC: '13912138921321321', telephone: '8889478371' }]
    return (
        <div>
            <div class="header-hero-container" style={{ position: "sticky-top" }}>
                <div class="admin_user-record-heading-container">
                    <h1 id="admin_user-records-main-heading">USER RECORDS</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <hr style={{ width: "10%", margin: "auto", marginTop: "10px", border: "2px solid #9BA4B5", borderRadius: "30px", opacity: "1" }} />
                </div>
                <form onsubmit="return searching()">
                    <div class="search_field-main-container">
                        <div class="each_search_field-container">
                            <img className='search-icon' src={require('../assets/search.png')} alt="" />
                            <input type="search" name="name" id='name' class="search_form-input-field" placeholder="Search by Name" autocomplete="off" />
                        </div>
                        <div class="each_search_field-container">
                            <img class="search-icon" src={require('../assets/search.png')} alt="" />
                            <input type="search" name="addess" id='address' class="search_form-input-field" placeholder="Search by Address" autocomplete="off" />
                        </div>
                        <div class="each_search_field-container">
                            <img class="search-icon" src={require('../assets/search.png')} />
                            <input type="search" name="email" id='email' class="search_form-input-field" placeholder="Search by Email" autocomplete="off" />
                        </div>
                    </div>
                    <div class="search_btn-container">
                        <input type="submit" value="Search" class="search_btn" />
                    </div>
                </form>
            </div>
            <div class="user_table-container" style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
                <table width="100%" style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{
                            background: "linear-gradient(89deg, rgb(16, 88, 197) 0.1%, rgb(32, 56, 161) 51.5%, rgb(15, 11, 127)100.2%)",
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                        }}>
                            <th>Customer Name</th>
                            <th>Email Address</th>
                            <th>Residential Address</th>
                            <th>CNIC Number</th>
                            <th>Telephone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CustomerRecords.length > 0 ? (
                            CustomerRecords.map((user, index) => (
                                <tr key={index} className="records" style={{ transition: '0.3s all ease-in-out' }}>
                                    <td>{user.customer_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.CNIC}</td>
                                    <td>{user.telephone}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className="records">
                                <td colSpan="5">Data not found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserRecords