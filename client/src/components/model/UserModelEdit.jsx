import React, { useState } from 'react'

const UserModelEdit = ({openModelEdit,setOpenModelEdit,dataEdit,setDataEdit,handleUpdate}) => {
    
  return (
    <div
      className={
        openModelEdit ? "portfolio__modal active-modal" : "portfolio__modal"
      }
    >
      <div className="portfolio__modal-content">
        <i
         onClick={() => {
            setOpenModelEdit(false);
          }}
          className="uil uil-times portfolio__modal-close"
        ></i>
        <h3 className="portfolio__modal-title">Edit User</h3>
        <form className="portfolio__modal-form" onSubmit={handleUpdate}>
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
                value={dataEdit?.username}
                onChange={(e)=>{
                  setDataEdit(pre=>{
                    return {
                      ...pre,username:e.target.value
                    }
                  })
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
                value={dataEdit?.email}
                onChange={(e)=>{
                  setDataEdit(pre=>{
                    return {
                      ...pre,email:e.target.value
                    }
                  })
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
                value={dataEdit?.password}
                onChange={(e)=>{
                  setDataEdit(pre=>{
                    return {
                      ...pre,password:e.target.value
                    }
                  })
                }}
              />
            </div>

            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Role
              </label>
              <select
                className="portfolio__modal-form-input"
                name="role"
                placeholder="Insert your name Project"
                value={dataEdit?.role}
                onChange={(e)=>{
                  setDataEdit(pre=>{
                    return {
                      ...pre,role:e.target.value
                    }
                  })
                }}
              >
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
            </div>
            <button className="button button--flex" type="submit">
              Update User
            </button>
          </div>
          <div className="user__modal-form-image">
            <img src="" alt="" />
            <label htmlFor="image" className="">
              <i class="bx bx-image-add"></i>
              <span>Edit Image</span>
            </label>
            <input id="image" type="file" hidden />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModelEdit