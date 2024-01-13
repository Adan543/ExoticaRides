import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//PAGES IMPORT//
import HomePage from './pages/HomePage/Homepage';
import BookingPage from './pages/BookingsPage/Bookings';
import ViewCarsPage from './pages/ViewCarsPage/ViewCars';
import RecordsPage from './pages/RecordsPage/Records';
import UserRecords from './pages/UserRecords/UserRecords';
import CarsRecords from './pages/CarsRecords/CarsRecords';
import BookingRecords from './pages/BookingRecords/BookingRecords'

//ROUTING WEBSITE IMPORTS
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminHomepage from './pages/AdminHomepage/AdminHomepage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/admin_dashboard",
    element: <AdminHomepage/>
  }
  ,
  {
    path:"homepage",
    element: <HomePage/>
  }
  , 
  {
    path: "bookings",
    element: <BookingPage/>
  }
  ,
  {
    path: "viewcars",
    element: <ViewCarsPage/>
  }
  ,
  {
    path: "records",
    element: <RecordsPage/>
  },
  {
    path:"user_records",
    element: <UserRecords/>
  },
  {
    path:"car_records",
    element: <CarsRecords/>
  },
  {
    path:"booking_records",
    element: <BookingRecords/>
  }

]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
