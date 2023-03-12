import React from "react";
import "./cardTestimonial.css";

const CardTestimonial = ({item,handleDelete,handleUpdate}) => {
  return (
    <div className="card__testimonial__card">
      <div className="card__testimonial__icon">
        <i
          className="bx bx-edit"
          onClick={()=>{handleUpdate(item._id)}}
        ></i>
        <i
          className="bx bx-checkbox-minus"
          onClick={()=>{
            handleDelete(item._id)
          }}
        ></i>
      </div>
      <div className="card__testimonial__content">
        <img src={item.image} alt="" className="card__testimonial__img" />
        <h3 className="card__testimonial__name">{item.testName}</h3>
        <p className="card__testimonial__description">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
