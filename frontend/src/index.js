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

//ROUTING WEBSITE IMPORTS
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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
