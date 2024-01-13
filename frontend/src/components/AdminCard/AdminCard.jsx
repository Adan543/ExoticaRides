import React from 'react'
import { Link } from 'react-router-dom'
import './AdminCard.css'
const AdminCard = ({page_link}) => {
  return (
    <div className='adminCard_hero-container'>
      
      <Link to={'/'+ page_link}>GO</Link>
    </div>
  )
}

export default AdminCard