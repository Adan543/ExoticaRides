import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Bookings.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useNavigate } from 'react-router-dom';
const Bookings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const carData = location.state && location.state.carData;
  const userdata = JSON.parse(sessionStorage.getItem("userData"));
  const usertel = userdata.telephone.tel_no;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date().getTime() + 24 * 60 * 60 * 1000);

  const SelectedCarData = [
    {
      license_no: carData[0],
      CarName: carData[1],
      company: carData[2],
      manufacture_year: carData[3],
      engine_cc: carData[4],
      car_type: carData[5],
      car_rate: carData[6]
    },
  ];

  const [data, setData] = useState({
    user_id: userdata.customer_user_id,
    license: SelectedCarData[0].license_no,
    addtelno: '',
    bookdate: "",
    duedate: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "bookdate" || event.target.name === "duedate") {
      setData({ ...data, [event.target.name]: event.target.value });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if all required fields are filled
    if (
    
      !data.bookdate ||
      !data.duedate
    ) {
      alert("Please fill out all required fields");
      return;
    }
  
    axios
      .post("http://localhost:8080/bookings/bookcar", { data })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data);
          navigate('/homepage')
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  

  const setEndDateOneDayGreater = (date) => {
    const newEndDate = new Date(date);
    newEndDate.setDate(date.getDate() + 1);
    setEndDate(newEndDate.getTime());
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDateOneDayGreater(date);
  };

  const timeDifference = endDate - startDate;
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  const ComputedCarRent = Math.ceil(daysDifference) * SelectedCarData[0].car_rate;

  return (
    <div style={{ backgroundColor: "grey" }}>
      <div className="booking_header-container">
        <Navbar />
        <div className="booking_header-content-container">
          <h1>Book Your Ride</h1>
          <h3>Fulfill the final requirements and enjoy the ride</h3>
        </div>
      </div>
      <div className="booking_form-main-container">
        <form onSubmit={handleSubmit}>
          <div className="row" style={{ margin: "0", height: "100%" }}>
            <div
              className="col-lg-7 booking_form-container"
              style={{ padding: "20px 50px" }}
            >
              <div
                className="booking_form-heading-container"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h3>Booking Details</h3>
              </div>
              <div style={{ marginTop: "10px" }}>
                <div
                  className="form_input-fields-container"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="each-field-container">
                    <label htmlFor="/">Car Name</label>
                    <input
                      type="text"
                      value={SelectedCarData[0].CarName}
                      className="Disabled_input-field"
                      readOnly
                    />
                  </div>
                  <div className="each-field-container">
                    <label htmlFor="/">Manufactured By</label>
                    <input
                      type="text"
                      value={SelectedCarData[0].company}
                      className="Disabled_input-field"
                      readOnly
                    />
                  </div>
                  <div className="each-field-container">
                    <label htmlFor="/">Car Type</label>
                    <input
                      type="text"
                      value={SelectedCarData[0].car_type}
                      className="Disabled_input-field"
                      readOnly
                    />
                  </div>
                </div>
                <div
                  className="form_input-fields-container"
                  style={{ marginTop: "20px" }}
                >
                  <div className="each-field-container each-field-container_two-input-width-tweak">
                    <label htmlFor="/">CNIC Number</label>
                    <div style={{ position: "relative" }}>
                      <img src={require('../assets/id-card.png')} className="input_field-icon-container" alt="" />
                      <input
                        type="text"
                        value={userdata.CNIC}
                        onChange={handleChange}
                        placeholder="42101-1234567-8"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="each-field-container each-field-container_two-input-width-tweak">
                    <label htmlFor="/">Complete Address</label>
                    <div style={{ position: "relative" }}>
                      <img src={require('../assets/book_address.png')} className="input_field-icon-container" alt="" />
                      <input
                        type='text'
                        name="address"
                        onChange={handleChange}
                        placeholder="ABC-ROAD, New York "
                        required
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="form_input-fields-container"
                  style={{ marginTop: "20px" }}
                >
                  <div className="each-field-container each-field-container_two-input-width-tweak">
                    <label htmlFor="/">Contact Number</label>
                    <div style={{ position: "relative" }}>
                      <img
                        src={require("../assets/contact.png")}
                        className="input_field-icon-container"
                        alt=""
                      />
                      <input
                        type="tel"
                        value={usertel}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="each-field-container each-field-container_two-input-width-tweak">
                    <label htmlFor="/">Additional Contact Number</label>
                    <div style={{ position: "relative" }}>
                      <img
                        src={require("../assets/add-contact.png")}
                        className="input_field-icon-container"
                        alt=""
                      />
                      <input
                        type="tel"
                        placeholder="+92-335-6081927"
                        name="addtelno"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="form_input-fields-container date-container"
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="each-field-container">
                    <label htmlFor="/">Booking Date</label>
                    <DatePicker
                      name="bookdate"
                      selected={startDate}
                      onChange={(date) => {
                        handleStartDateChange(date);
                        handleChange({
                          target: { name: "bookdate", value: date },
                        });
                      }}
                      minDate={new Date()}
                      dateFormat={"dd/MM/yyyy"}
                      required
                    />
                  </div>
                  <div className="each-field-container">
                    <label htmlFor="/">Return Date</label>
                    <DatePicker
                      name="duedate"
                      selected={endDate}
                      onChange={(date) => {
                        setEndDate(date.getTime());
                        handleChange({
                          target: { name: "duedate", value: date },
                        });
                      }}
                      minDate={new Date(
                        startDate.getTime() + 24 * 60 * 60 * 1000
                      )}
                      dateFormat={"dd/MM/yyyy"}
                      required
                    />
                  </div>
                  <div className="each-field-container">
                    <label htmlFor="/">Car Rent</label>
                    <input
                      className="booking_form-total-price-input-field"
                      type="text"
                      disabled
                      value={ComputedCarRent + "$"}
                    />
                  </div>
                </div>
              </div>
              <div
                className="Book_now-BTN-container"
                style={{
                  marginTop: "20px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  className="book_now-BTN"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="col-lg-5 booking_form-car_img-container">
              <div
                className="car_image-container"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={require("../../components/assets/heh.png")}
                  alt=""
                  className="booking_car-img"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookings;