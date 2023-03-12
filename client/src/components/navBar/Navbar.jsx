import React from 'react'
import './navbar.css'
import {Link  } from "react-router-dom"

const Navbar = () => {

  return (
    <div className='navbar__container'>
      
        <ul className='navbar__list'>
            <li className='navbar__item'><Link to="/admin">Dashboard</Link></li>
            <li className='navbar__item'><Link to="/admin/portfolio">Portfolio</Link></li>
            <li className='navbar__item'><Link to="/admin/testimonial">Testimonial</Link></li>
            <li className='navbar__item'><Link to="/admin/skill">Skills</Link></li>
            <li className='navbar__item'><Link to="/admin/users">Users</Link></li>
        </ul>
    </div>
  )
}

export default Navbar