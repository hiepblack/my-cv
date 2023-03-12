import React, { useEffect, useState } from "react";
import Card from "../../../components/cardPortfolio/Card";
import PortfolioModelEdit from "../../../components/model/PortfolioModelEdit";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../hook";

const ListCard = ({ projects, setProjects }) => {
  const [loading, setLoading] = useState(true);
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const handleRemove = (id) => {
    console.log(id);
    fetch(`${BASE_URL}/api/v1/project/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        const newData = projects?.filter((item) => item._id !== id);
        setProjects(newData);
        setLoading(false);
      });
  };

  const handeEdit = (id) => {
    setOpenModelEdit(true);
    const newDataEdit = projects.find((item) => item._id === id);
    setDataEdit(newDataEdit);
  };

  const handleEditData = (e) => {
    e.preventDefault();
    console.log(dataEdit);
    fetch(`${BASE_URL}/api/v1/project/${dataEdit._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataEdit),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        const newProjectEdit = projects.map((item) => {
          return item._id === dataEdit._id ? dataEdit : item;
        });
        setProjects(newProjectEdit);
        setOpenModelEdit(false);
      });
  };

  return (
    <>
      {projects?.map((project) => {
        return (
          <Card
            project={project}
            handleRemove={handleRemove}
            handleEdit={handeEdit}
          />
        );
      })}
      <PortfolioModelEdit
        setDataEdit={setDataEdit}
        dataEdit={dataEdit}
        openModelEdit={openModelEdit}
        setOpenModelEdit={setOpenModelEdit}
        handleEditData={handleEditData}
      />
    </>
  );
};

export default ListCard;
