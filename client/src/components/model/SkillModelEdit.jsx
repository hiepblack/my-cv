import React, { useState } from "react";

const SkillModelEdit = ({
  openModelEdit,
  setOpenModelEdit,
  editNewSkillData,
  seteditNewSkillData,
  handleEditNewProject
}) => {
  
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

        <h3 className="portfolio__modal-title">Edit Skill</h3>

        <form className="portfolio__modal-form" onSubmit={handleEditNewProject}>
          <div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Name
              </label>
              <input
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert your name Skill"
                value={editNewSkillData?.name}
                onChange={(e)=>{
                  seteditNewSkillData(pre=>{
                  return {
                    ...pre,name:e.target.value
                  }
                  })
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Level
              </label>
              <input
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert your Level(basic,...)"
                value={editNewSkillData?.level}
                onChange={(e)=>{
                  seteditNewSkillData(pre=>{
                  return {
                    ...pre,level:e.target.value
                  }
                  })
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Role
              </label>
              <input
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert your Role(frontend,backend)"
                value={editNewSkillData?.role}
                onChange={(e)=>{
                  seteditNewSkillData(pre=>{
                  return {
                    ...pre,role:e.target.value
                  }
                  })
                }}
              />
            </div>

            <button className="button button--flex" type="submit">
              Done!
            </button>
          </div>

          <div className="portfolio__modal-form-image">
            <img src={editNewSkillData?.image} alt="" />
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

export default SkillModelEdit;
