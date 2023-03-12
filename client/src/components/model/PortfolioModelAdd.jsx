import React, { useState } from "react";
import { Upload } from "../../hook";
import { toast } from "react-toastify";
import { BASE_URL } from "../../hook";

const PortfolioModelAdd = ({ openModelAdd, setOpenModelAdd, setProjects }) => {
  const [addNewProjectData, setAddNewProjectData] = useState({
    image: "https://picsum.photos/200/300",
  });
  const uploadImage = async (e) => {
    const file = e.target.files;
    console.log(file);
    const link = await Upload(file);
    console.log(link);
    toast.success("Update link image done!");
    setAddNewProjectData((pre) => {
      return {
        ...pre,
        image: link,
      };
    });
  };
  const handleAddNewProject = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/v1/project/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewProjectData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        if (data.success) {
          setProjects((prevState) => {
            return [...prevState, addNewProjectData];
          });
          setOpenModelAdd(false);
        }
      })
      .catch((err) => {
        console.log(err);
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

        <h3 className="portfolio__modal-title">Add Project</h3>

        <form className="portfolio__modal-form" onSubmit={handleAddNewProject}>
          <div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Name
              </label>
              <input
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder=" Your name Project"
                onChange={(e) => {
                  setAddNewProjectData((prevState) => {
                    return {
                      ...prevState,
                      title: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Link
              </label>
              <input
                type="text"
                className="portfolio__modal-form-input"
                placeholder=" Your link Project"
                onChange={(e) => {
                  setAddNewProjectData((prevState) => {
                    return {
                      ...prevState,
                      link: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="portfolio__modal-form-div portfolio__form-area">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Description
              </label>
              <textarea
                name="desc"
                id=""
                cols="30"
                rows="10"
                className="portfolio__modal-form-input "
                placeholder="Your description"
                onChange={(e) => {
                  setAddNewProjectData((prevState) => {
                    return {
                      ...prevState,
                      description: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Start At
              </label>
              <input
                type="date"
                className="portfolio__modal-form-input"
                name="name"
                onChange={(e) => {
                  setAddNewProjectData((prevState) => {
                    return {
                      ...prevState,
                      startAt: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Close
              </label>
              <input
                type="date"
                className="portfolio__modal-form-input"
                name="name"
                onChange={(e) => {
                  setAddNewProjectData((prevState) => {
                    return {
                      ...prevState,
                      closeAt: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <input
              className="button button--flex"
              type="submit"
              value="Done!"
            />
          </div>

          <div className="">
            <div className="portfolio__modal-form-div cate">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Category
              </label>
              <input
                placeholder="Your category project"
                type="text"
                className="portfolio__modal-form-input"
                onChange={(e) => {
                  setAddNewProjectData((prevState) => {
                    return {
                      ...prevState,
                      category: e.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="portfolio__modal-form-image">
              <img src={addNewProjectData.image} alt="" />
              <label htmlFor="imageportfolio" className="">
                <i class="bx bx-image-add"></i>
                <span>Add Image</span>
              </label>
              <input
                id="imageportfolio"
                type="file"
                hidden
                onChange={uploadImage}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioModelAdd;
