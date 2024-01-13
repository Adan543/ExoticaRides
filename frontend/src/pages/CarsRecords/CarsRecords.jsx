import React, { useState } from 'react'
import AddCarModal from '../../components/CarDetailModal/CarDetailModal'
import CarUpdateModalABC from '../../components/CarDetailModal/CarUpdateModal'

const CarsRecords = () => {
  const CarRecord = [
    { car_name: 'Bhangi', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', },
    { car_name: '911 Carrera S', manufacturer: 'Porsche', manufacture_year: '2018', engine_cc: '3000cc', transmission: 'automatic', car_type: 'sedan', car_rate: '500', }]

  const [CarModalToggle, SetCarModalToggle] = useState(false);
  const [CarUpdateModal, SetCarUpdateModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState("nothing");

  const OpenCarModal = () => {
    SetCarModalToggle(true)
  }

  const CloseCarModal = () => {
    SetCarModalToggle(false)
  }

  //ADD CAR HANDLE SUBMIT
  const handleSubmitAddCar = (e) => {
    e.preventDefault();
    //BACKEND IDHR AYEGI
    console.log("Form Submitted")
    CloseCarModal()
  }

  const OpenUpdateCarModal = (car) => {
    setSelectedCar(car);
    SetCarUpdateModal(true)
  }

  const CloseCarUpdateModal = () => {
    SetCarUpdateModal(false)
  }

  //UPDATE CAR HANDLE SUBMIT
  const handleSubmitUpdateCar = (e) => {
    e.preventDefault();
    //BACKEND IDHR AYEGI
    console.log("Form Updated")
    CloseCarModal()
  }


  return (
    <div>
      <div class="header-hero-container" style={{ position: "sticky-top" }}>
        <div class="admin_user-record-heading-container">
          <h1 id="admin_user-records-main-heading">CAR RECORDS</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={{ width: "10%", margin: "auto", marginTop: "10px", border: "2px solid #9BA4B5", borderRadius: "30px", opacity: "1" }} />
        </div>
        <div>
          <div class="search_field-main-container">
            <div class="each_search_field-container">
              <img className='search-icon' src={require('../assets/search.png')} alt="" />
              <input type="search" name="name" id='name' class="search_form-input-field" placeholder="Search by Car Name" autocomplete="off" />
            </div>
            <div class="each_search_field-container">
              <img class="search-icon" src={require('../assets/search.png')} alt="" />
              <input type="search" name="manufacturer" id='manufacturer' class="search_form-input-field" placeholder="Search by Manufacturer" autocomplete="off" />
            </div>
            <div class="each_search_field-container">
              <img class="search-icon" src={require('../assets/search.png')} />
              <input type="search" name="car-type" id='car-type' class="search_form-input-field" placeholder="Search by Car Type" autocomplete="off" />
            </div>
          </div>
          <div class="search_btn-container">
            <input type="submit" value="Search" class="search_btn" />
            <button onClick={OpenCarModal} class="search_btn">Add Car</button>
            {/*Rende AddCarModal */}
            <AddCarModal
              isOpen={CarModalToggle}
              onClose={CloseCarModal}
              handleSubmit={handleSubmitAddCar} />
          </div>
        </div>
      </div>
      <div class="user_table-container" style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
        <table width="100%" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{
              background: "linear-gradient(89deg, rgb(16, 88, 197) 0.1%, rgb(32, 56, 161) 51.5%, rgb(15, 11, 127)100.2%)",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }}>
              <th>Car Name</th>
              <th>Manufactured By</th>
              <th>Manufacture Year</th>
              <th>Engine CC</th>
              <th>Car Type</th>
              <th>Transmission</th>
              <th>Car Rate</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {CarRecord.length > 0 ? (
              CarRecord.map((car_record, index) => (
                <tr key={index} className="records" style={{ transition: '0.3s all ease-in-out' }}>
                  <td>{car_record.car_name}</td>
                  <td>{car_record.manufacturer}</td>
                  <td>{car_record.manufacture_year}</td>
                  <td>{car_record.engine_cc}</td>
                  <td>{car_record.car_type}</td>
                  <td>{car_record.transmission}</td>
                  <td>{car_record.car_rate}</td>
                  <td style={{ display: 'flex', justifyContent: 'center', gap: "10px" }}>
                    <button onClick={() => OpenUpdateCarModal(car_record)} className='update_del-btn'>Update</button>
                    <button className='update_del-btn'>Delete</button>
                  </td>
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
      {/* Render CarUpdateModal */}
      {selectedCar && (
        <CarUpdateModalABC
          isOpen={CarUpdateModal}
          onClose={CloseCarUpdateModal}
          car_record={selectedCar}
          handleSubmit={handleSubmitUpdateCar}
        />
      )}
    </div>
  )
}

export default CarsRecords