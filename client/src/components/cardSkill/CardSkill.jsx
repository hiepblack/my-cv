import React from "react";
import "./cardskill.css";
import { Link } from "react-router-dom";

const CardSkill = ({ item, handleDeleteSkill, handleEditSkill }) => {
  return (
    <div className="skills__admin__item">
      <div className="card__icon">
        <i
          class="bx bx-edit"
          onClick={() => {
            handleEditSkill(item._id);
          }}
        ></i>
        <i
          class="bx bx-checkbox-minus"
          onClick={() => {
            handleDeleteSkill(item._id);
          }}
        ></i>
      </div>
      <Link to="#" className="ag-courses-item_link skills__admin__card">
        <div className="skill__admin__title">
          <h3>{item.name.toUpperCase()}</h3>
          <p>{item.level}</p>
        </div>
        <div className="skills__admin__img ">
          <img src={item.image} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default CardSkill;
