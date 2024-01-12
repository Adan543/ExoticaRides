//React Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slider';
import ReactPaginate from 'react-paginate';
import Navbar from '../../components/Navbar/Navbar';
import CarsCard from '../../components/CarsCard/CarsCard';
import './ViewCars.css';

const ViewCars = () => {

  const [data,setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  
  //USESTATE FOR FILTER RANGE SLIDERS
  const [Year, setYear] = useState([2000, 2024])
  const [Price, setPrice] = useState([1500, 5000])

  //TO HANDLE PAGE NUMBERS
  // const [Cars, SetCars] = useState(data);

  const [PageNumber , SetPageNumber] = useState(0);

  const CarsPerPage = 6
  const TotalCarsViewed = PageNumber * CarsPerPage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/car/getcars');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const cars = data;
  console.log(cars)
  useEffect(() => {
    // Filter cars based on the selected price, year range, and search term
    const filteredCars = data.filter(
      (car) =>
        car.car_rate >= Price[0] &&
        car.car_rate <= Price[1] &&
        car.manufacture_year >= Year[0] &&
        car.manufacture_year <= Year[1] &&
        car.car_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredCars);
  }, [data, Price, Year, searchTerm]);


  const displayCars = filteredData
    .slice(TotalCarsViewed, TotalCarsViewed + CarsPerPage)
    .map((car, index) => <CarsCard key={index} car={car} />);
  //TO DISPLAY 6 CARS PER PAGE
  // const DisplayCars = cars.slice(TotalCarsViewed, TotalCarsViewed + CarsPerPage).map((car, index) => (
  //   <CarsCard key={index} car={car} />
  // ));

  //DESTRUCTURE PAGINATION AND CHANGE PAGE FUNCTION

  const ChangePage = ({selected}) => {
    SetPageNumber(selected)
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [isClicked, SetClicked] = useState(false);
  const HandleClick = () => {
    SetClicked(!isClicked);
  }

  return (
    <div>
      <div className="main_head-container">
        <div className="background-video-container">
          <video className='lol' autoPlay loop muted>
            <source src={require('../assets/vid.mp4')} />
          </video>
        </div>
        <Navbar className='navbar_viewcar' />
        <div className="heading_content-container">
          <h1>YOUR JOURNEY, <span style={{ color: '#05c1ae' }}>YOUR WAY.</span></h1>
          <h5>select your signature ride from our fleet.</h5>
        </div>

        <div className="container-fluid">
          <div className="row cars_main-row">
            {/* CARS CARD CONTAINER */}
            <div className="col-lg-8 cars_card-main-container">
              {displayCars}
              <ReactPaginate
                previousLabel = {"<<"}
                nextLabel = {">>"}
                pageCount={Math.ceil(cars.length / CarsPerPage)}
                onPageChange={ChangePage}
                containerClassName='PaginationContainer'
                previousLinkClassName='PreviousPageBTN'
                nextClassName='PageNextBTN'
              />
            </div>
            {/* SEARCH FILTER CARD CONTAINER */}
            <div className="col-lg-4 filters_card-main-container" style={{padding: "50px"}}>
              <div className="filter_card-hero-container">
                <div className="filter_card-heading-container" style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}>
                  <h1>Search your Ride</h1>
                </div>
                <div className="filter_fields-container">
                  <label htmlFor="/">Car Name</label>
                  <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
                </div>
                <div className="filter_fields-container">
        <label htmlFor="/">Year Range</label>
        <Slider
          className="RangeSlider"
          onChange={(value) => setYear(value)}
          value={Year}
          min={2000}
          max={2024}
        />
        <div className="year_range-display-container">
          <div className="value">
            <span className="rangeSlider_value-display">{Year[0]}</span>
            <span className="rangeSlider_value-display">{Year[1]}</span>
          </div>
        </div>
      </div>
                <div className="filter_fields-container">
        <label htmlFor="/">Price Range</label>
        <Slider
          className="RangeSlider"
          onChange={(value) => setPrice(value)}
          value={Price}
          min={1500}
          max={5000}
          step={100}
        />
        <div className="price_range-display-container">
          <div className="value">
            <span className="rangeSlider_value-display">{Price[0] + '$'}</span>
            <span className="rangeSlider_value-display">{Price[1] + '$'}</span>
          </div>
        </div>
      </div>
                <div className='filter_fields-container'>
                  <label htmlFor="/">Car Type</label>
                  <div className="car_type-button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <button className='car_type-BTN' 
                      onClick={HandleClick}
                      style={{backgroundColor: isClicked ? 'red': "transparent"}}
                    >
                      <img src={require('../assets/sedan-car-model.png')} alt="" />
                    </button>
                    <button className='car_type-BTN'>
                      <img src={require('../assets/convertible-car-model.png')} alt="" />
                    </button>
                    <button className='car_type-BTN'>
                      <img src={require('../assets/crossover-car-model.png')} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ViewCars

{/* <div className="container-fluid">
        <div className="row habshi" style={{ margin: '50px' }}>
          <div id='col-lg-12 layer'></div>
          <div className="col-lg-8" style={{ backgroundColor: "wheat", display: "flex", justifyContent: 'center', gap: '40px', padding: "40px" }}>
            {CarData.map((car, index) => (
              <CarsCard key={index} car={car} />
            ))}
          </div>
          <div className="col-lg-4" style={{ padding: "40px", backgroundColor: 'blue' }}>
            <div className="filter_card-hero-container">
              <div className="filter_fields-container">
                <label htmlFor="/">Car Name</label>
                <input type="text" placeholder='Search by name' />
              </div>
              <div className="filter_fields-container">
                <label htmlFor="/">Year Range</label>
                <Slider className={"RangeSlider"}
                  onChange={SetYear}
                  value={Year}
                  min={2000}
                  max={2024}
                />
                <div className="year_range-display-container">
                  <div className={"value"}>
                    <span className='rangeSlider_value-display'>{Year[0]}</span>
                    <span className='rangeSlider_value-display'>{Year[1]}</span>
                  </div>
                </div>
              </div>
              <div className="filter_fields-container">
                <label htmlFor="/">Price Range</label>
                <Slider className={"RangeSlider"}
                  onChange={SetPrice}
                  value={Price}
                  min={1500}
                  max={5000}
                  step={100} />
                <div className="price_range-display-container">
                  <div className={"value"}>
                    <span className='rangeSlider_value-display'>{Price[0] + "$"}</span>
                    <span className='rangeSlider_value-display'>{Price[1] + "$"}</span>
                  </div>
                </div>
              </div>
              <div className='filter_fields-container'>
                <label htmlFor="/">Car Type</label>
                <div className="car_type-button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <button className='car_type-BTN'>
                    <img src={require('../assets/sedan-car-model.png')} alt="" />
                  </button>
                  <button className='car_type-BTN'>
                    <img src={require('../assets/convertible-car-model.png')} alt="" />
                  </button>
                  <button className='car_type-BTN'>
                    <img src={require('../assets/crossover-car-model.png')} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}