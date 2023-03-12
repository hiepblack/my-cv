import React from 'react'
import {Routes,Route} from "react-router-dom";
import Portfolio from "../Pages/admin/portfolio/Portfolio"
import Dashboard from '../Pages/admin/dashboard/Dashboard';
import Users from "../Pages/admin/users/Users";
import Skills from '../Pages/admin/skills/Skills';
import Testimonial from '../Pages/admin/testimonial/Testimonial';

const AdminRouter = () => {
  return (
    <Routes>
        <Route path="" element={<Dashboard/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="skill" element={<Skills/>}/>
        <Route path="testimonial" element={<Testimonial/>}/>
    </Routes>
  )
}

export default AdminRouter