import React, { useState, useRef } from "react";
import { Upload } from "../../hook";
import { toast } from "react-toastify";
import { BASE_URL } from "../../hook";

const SkillModelAdd = ({ openModel, setOpenModel, setData }) => {
  const [loading, setLoading] = useState(false);
  const [addNewSkillData, setAddNewSkillData] = useState({
    name: "",
    image: "",
    level: "",
    role: "",
  });
  const name = useRef();
  const image = useRef();
  const level = useRef();
  const role = useRef();
  
  const uploadImage = async (e) => {
    const files = e.target.files;
    const urlImg = await Upload(files);
    console.log(urlImg);
    setAddNewSkillData((pre) => {
      return {
        ...pre,
        image: urlImg,
      };
    });
    setLoading(true);
    toast.success('upload image success')
  };
  const handleAddNewProject = (e) => {
    e.preventDefault();
    
    fetch(`${BASE_URL}/api/v1/skill/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewSkillData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        setData((pre) => {
          return [...pre, addNewSkillData];
        });
        setOpenModel(false);
        name.current.value = "";
        role.current.value = "";
        level.current.value = "";
        image.current.src = "";
      });
  };
  return (
    <div
      className={
        openModel ? "portfolio__modal active-modal" : "portfolio__modal"
      }
    >
      <div className="portfolio__modal-content">
        <i
          onClick={() => {
            setOpenModel(false);
          }}
          className="uil uil-times portfolio__modal-close"
        ></i>

        <h3 className="portfolio__modal-title">Add Skill</h3>

        <form className="portfolio__modal-form" onSubmit={handleAddNewProject}>
          <div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Name
              </label>
              <input
                ref={name}
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert your name Skill"
                onChange={(e) => {
                  setAddNewSkillData((pre) => {
                    return {
                      ...pre,
                      name: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Level
              </label>
              <input
                ref={level}
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert your Level(basic,...)"
                onChange={(e) => {
                  setAddNewSkillData((pre) => {
                    return {
                      ...pre,
                      level: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Role
              </label>
              <input
                ref={role}
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert your Role(frontend,backend)"
                onChange={(e) => {
                  setAddNewSkillData((pre) => {
                    return {
                      ...pre,
                      role: e.target.value,
                    };
                  });
                }}
              />
            </div>

            <input
              className="button button--flex"
              type="submit"
              disabled={loading ? false : true}
              value="Done!"
            />
          </div>

          <div className="portfolio__modal-form-image">
            <img src={addNewSkillData?.image} alt="" ref={image} />
            <label htmlFor="image" className="">
              <i class="bx bx-image-add"></i>
              <span>Add Image</span>
            </label>
            <input id="image" type="file" hidden onChange={uploadImage} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillModelAdd;
