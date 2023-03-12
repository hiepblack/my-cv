import React, { useState, useEffect } from "react";
import "./user.css";
import Banner from "../../../components/banner/Banner";
import UserModelAdd from "../../../components/model/UserModelAdd";
import UserModelEdit from "../../../components/model/UserModelEdit";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../hook";


const Users = () => {
  const [dataUser, setDataUser] = useState([]);
  const [openModelAdd, setOpenModelAdd] = useState(false);
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
    status: true,
  });
  
  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/user/`)
      .then((res) => res.json())
      .then((data) => setDataUser(data.user));
  }, []);

  //   hanh dong xoa :xong
  const handleDelete = (id) => {
    fetch(`${BASE_URL}/api/v1/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        toast.success(`${data.message} username:` + data.result.username);
        const newDataUser = dataUser.filter((item) => item._id !== id);
        setDataUser(newDataUser);
      });
  };
  //   hanh dong sua:xong
  const handleEdit = (id) => {
    setOpenModelEdit(true);
    const newDataEdit = dataUser.filter((item) => item._id === id);
    setDataEdit(...newDataEdit);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update user");
    fetch(`${BASE_URL}/api/v1/user/${dataEdit._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataEdit),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        const newDataUser = dataUser.map((item) => {
          return item._id === dataEdit._id ? dataEdit : item;
        });
        setDataUser(newDataUser);
        setOpenModelEdit(false);
      });
  };
  return (
    <div>
      <Banner title="Users" />
      <div className="user__container">
        <div className="user__header">
          <h3>List User</h3>
          <button
            className="button"
            onClick={() => {
              setOpenModelAdd(true);
            }}
          >
            Add new+
          </button>
        </div>
        <table className="user__table">
          <thead className="user__table-thead">
            <tr>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataUser?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.status ? "Enable" : "Disabled"}</td>
                  <td>
                    <button
                      className="button"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        handleEdit(item._id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* model add */}
        <UserModelAdd
          openModelAdd={openModelAdd}
          setOpenModelAdd={setOpenModelAdd}
          setDataUser={setDataUser}
        />
        {/* model edit */}
        <UserModelEdit
          openModelEdit={openModelEdit}
          setOpenModelEdit={setOpenModelEdit}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Users;
