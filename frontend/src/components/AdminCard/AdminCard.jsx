import React from 'react'
import { Link } from 'react-router-dom'
import './AdminCard.css'
const AdminCard = ({ page_link, icon, title }) => {
  return (
    <div class="card-wrap">
      <div class="card-header one">
        {icon}
      </div>
      <div class="card-content">
        <h1 class="card-title">{title}</h1>
        <Link class="cta" to={'/' + page_link}>
          <span class="hover-underline-animation"> View Records </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
            fill='white'
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </Link>
      </div>
    </div>


  )
}

export default AdminCard