import React, { useEffect } from "react";
import AdminRouter from "../router/AdminRouter";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/navBar/Navbar";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/admin", {
      method: "GET",
      headers: {
        "x-oauth-token": JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          alert(data.message);
          navigate("/");
        }
      });
  }, []);
  return (
    <div className="admin__container">
      <Sidebar />
      <div className="admin__section">
        <Navbar />
        <AdminRouter />
      </div>
    </div>
  );
};

export default Admin;
