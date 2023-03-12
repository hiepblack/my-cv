import React, { useEffect, useState } from "react";
import CardSkill from "../../../components/cardSkill/CardSkill";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../hook";

const ListKill = ({ data, handleEditSkill, setData }) => {
  const handleDeleteSkill = (id) => {
    const conform = window.confirm("Are you sure delete?");
    if (conform) {
      fetch(`${BASE_URL}/api/v1/skill/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((skill) => {
          console.log(skill);
          toast.success(skill.message);
          if (skill.success) {
            const newDataSkill = data.filter((item) => item._id !== id);
            setData(newDataSkill);
          }
        });
    }
  };

  return (
    <>
      {data?.map((item) => {
        return (
          <React.Fragment key={item._id}>
            <CardSkill
              item={item}
              handleDeleteSkill={handleDeleteSkill}
              handleEditSkill={handleEditSkill}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListKill;
