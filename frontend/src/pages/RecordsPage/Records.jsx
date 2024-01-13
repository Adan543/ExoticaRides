import React, { useState, useEffect } from 'react';
import './Records.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const Records = () => {
  const [bookingRecords, setBookingRecords] = useState([]);
  const user_id = JSON.parse(sessionStorage.getItem('userData')).customer_user_id;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/bookings/bookingrecords/${user_id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          setBookingRecords(res.data);
          console.log(bookingRecords)
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }, [user_id]);
  


  return (
    <div className='parent'>
      <Navbar className='UserRecordsNav' />
      <div className="UserRecords-heading-container">
        <h1>VIEW YOUR RECORDS</h1>
        <h3>hjdklajdalkdjaklsdjkldjsakldjakldjakldjakldaj</h3>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="User_Records-table-container" style={{ margin: 'auto', marginTop: "40px", maxHeight: "450px", overflowY: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Booking Date</th>
                  <th>Return Date</th>
                  <th>Car Name</th>
                  <th>Manufacturer</th>
                  <th>Car Rate</th>
                </tr>
              </thead>
              <tbody style={{ marginTop: "50px" }}>
              {bookingRecords.map((booking, index) => (
  <tr key={index}>
   <td>{new Date(booking.booking_date).toLocaleDateString()}</td>


   <td>{new Date(booking.due_date).toLocaleDateString()}</td>


    <td>{booking.car.car_name}</td>
    <td>{booking.car.manufactured_by.company.company_name}</td>
    <td>{booking.car.car_info.car_rate}</td>
    {/* <td>{booking.car_rate}</td> */}
  </tr>
))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
