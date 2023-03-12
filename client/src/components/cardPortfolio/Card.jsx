import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ project, handleRemove, handleEdit }) => {
  const createdAt = moment(project.createdAtProject).format("DD-MM-YYYY");
  return (
    <div className="ag-courses_item">
      <div className="card__icon">
        <i
          class="bx bx-edit"
          onClick={() => {
            handleEdit(project._id);
          }}
        ></i>
        <i
          class="bx bx-checkbox-minus"
          onClick={() => {
            handleRemove(project._id);
          }}
        ></i>
      </div>
      <Link to="#" className="ag-courses-item_link">
        <div className="ag-courses-item_title">{project.title}</div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">{project && createdAt}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
