import React from 'react'

const BookingRecords = () => {
  const BookingRecords = [
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500'},
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500'},
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500'},
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500' },
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500' },
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500'},
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500'},
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500'},
    {customer_id:'123', customer_name: 'Muhib', car_name: 'Porsche Carrera S', booking_date:'11/1/2024', return_date:'12/1/2024', car_rent:'500'}]
  return (
    <div>
      <div class="header-hero-container" style={{ position: "sticky-top" }}>
        <div class="admin_user-record-heading-container">
          <h1 id="admin_user-records-main-heading">BOOKING RECORDS</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={{ width: "10%", margin: "auto", marginTop: "10px", border: "2px solid #9BA4B5", borderRadius: "30px", opacity: "1" }} />
        </div>
        <form>
          <div class="search_field-main-container">
            <div class="each_search_field-container">
              <img className='search-icon' src={require('../assets/search.png')} alt="" />
              <input type="search" name="name" id='name' class="search_form-input-field" placeholder="Search by Customer Name" autocomplete="off" />
            </div>
            <div class="each_search_field-container">
              <img class="search-icon" src={require('../assets/search.png')} alt="" />
              <input type="search" name="addess" id='address' class="search_form-input-field" placeholder="Search by Car Name" autocomplete="off" />
            </div>
            <div class="each_search_field-container">
              <img class="search-icon" src={require('../assets/search.png')} />
              <input type="search" name="email" id='email' class="search_form-input-field" placeholder="Search by Car Rate" autocomplete="off" />
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
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Car Name</th>
              <th>Booking Date</th>
              <th>Return Date</th>
              <th>Car Rate</th>
            </tr>
          </thead>
          <tbody>
            {BookingRecords.length > 0 ? (
              BookingRecords.map((booking_record, index) => (
                <tr key={index} className="records" style={{ transition: '0.3s all ease-in-out' }}>
                  <td>{booking_record.customer_id}</td>
                  <td>{booking_record.customer_name}</td>
                  <td>{booking_record.car_name}</td>
                  <td>{booking_record.booking_date}</td>
                  <td>{booking_record.return_date}</td>
                  <td>{booking_record.car_rent}</td>
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

export default BookingRecords