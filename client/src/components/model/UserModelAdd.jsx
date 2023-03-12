import React, { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../hook";

const UserModelAdd = ({ setOpenModelAdd, openModelAdd, setDataUser }) => {
  const [addNewUserData, setAddNewUserData] = useState({
    username: "",
    password: "",
    email: "",
    role: "customer",
    status: true,
  });
  const [rePass, setRePass] = useState();
  const handleAddNewUser = (e) => {
    e.preventDefault();
    if (rePass !== addNewUserData.password) {
      alert("mat khau phai trung khop");
      return;
    }
    fetch(`${BASE_URL}/api/v1/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewUserData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        setDataUser((preState) => {
          return [...preState, addNewUserData];
        });
        setOpenModelAdd(false);
        setAddNewUserData({})
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div
      className={
        openModelAdd ? "portfolio__modal active-modal" : "portfolio__modal"
      }
    >
      <div className="portfolio__modal-content">
        <i
          onClick={() => {
            setOpenModelAdd(false);
          }}
          className="uil uil-times portfolio__modal-close"
        ></i>

        <h3 className="portfolio__modal-title">Add User</h3>

        <form className="portfolio__modal-form" onSubmit={handleAddNewUser}>
          <div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                UserName
              </label>
              <input
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert Username"
                onChange={(e) => {
                  setAddNewUserData((preState) => {
                    return {
                      ...preState,
                      username: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Email
              </label>
              <input
                type="email"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert Email"
                onChange={(e) => {
                  setAddNewUserData((preState) => {
                    return {
                      ...preState,
                      email: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Password
              </label>
              <input
                type="password"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert Password"
                onChange={(e) => {
                  setAddNewUserData((preState) => {
                    return {
                      ...preState,
                      password: e.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                RePassword
              </label>
              <input
                type="password"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert your name Project"
                onChange={(e) => {
                  setRePass(e.target.value);
                }}
              />
            </div>
            <button className="button button--flex" type="submit">
              Add User
            </button>
          </div>
          <div className="user__modal-form-image">
            <img src="" alt="" />
            <label htmlFor="image" className="">
              <i class="bx bx-image-add"></i>
              <span>Add Image</span>
            </label>
            <input id="image" type="file" hidden />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModelAdd;
