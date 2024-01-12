import React from 'react'
import './Records.css'
import Navbar from '../../components/Navbar/Navbar'

const Records = () => {
  //DUMMY DATA
  const UserBookingRecord = [
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' },
    { booking_date: '10/01/2024', return_date: '12/01/2024', car_name: '911 Carrera S', manufacturer: 'Porsche', car_rate: '500$' }
  ]
  //Booking Date/ Return Date/ Car Name/ Manufacturer/ Car Rate/  
  return (
    <div className='parent'>
      <Navbar className='UserRecordsNav' />
      <div className="UserRecords-heading-container">
        <h1>VIEW YOUR RECORDS</h1>
        <h3>hjdklajdalkdjaklsdjkldjsakldjakldjakldjakldaj</h3>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="User_Records-table-container"
            style={{ 
              margin:'auto',
              marginTop:"40px",
              maxHeight:"450px", overflowY:"auto"      
            }}>
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
              <tbody style={{marginTop:"50px"}}>
                {UserBookingRecord.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.booking_date}</td>
                    <td>{booking.return_date}</td>
                    <td>{booking.car_name}</td>
                    <td>{booking.manufacturer}</td>
                    <td>{booking.car_rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Records