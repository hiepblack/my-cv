import React from 'react'
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import {Routes,Route} from "react-router-dom";

const AuthRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
    </Routes>
  )
}

export default AuthRouter