import React, { useState } from "react";
import moment from "moment";
import { Upload } from "../../hook";

const PortfolioModelEdit = ({
  openModelEdit,
  setOpenModelEdit,
  dataEdit,
  setDataEdit,
  handleEditData,
}) => {
  const [newLink, setNewLink] = useState("");
  const updateImage = async (e) => {
    const file = e.target.files;
    const link = await Upload(file);
    setDataEdit((pre) => {
      return {
        ...pre,
        image: link,
      };
    });
  };
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

        <h3 className="portfolio__modal-title"> Edit Project</h3>

        <form className="portfolio__modal-form" onSubmit={handleEditData}>
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
                value={dataEdit?.title}
                onChange={(e) => {
                  setDataEdit((pre) => {
                    return {
                      ...pre,
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
                value={dataEdit?.link}
                onChange={(e) => {
                  setDataEdit((pre) => {
                    return {
                      ...pre,
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
                value={dataEdit?.description}
                onChange={(e) => {
                  setDataEdit((pre) => {
                    return {
                      ...pre,
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
                value={moment(dataEdit?.createdAtProject).format("YYYY-MM-DD")}
                onChange={(e) => {
                  setDataEdit((pre) => {
                    return {
                      ...pre,
                      createdAtProject: e.target.value,
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
                value={moment(dataEdit?.closedAtProject).format("YYYY-MM-DD")}
                onChange={(e) => {
                  setDataEdit((pre) => {
                    return {
                      ...pre,
                      closedAtProject: e.target.value,
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
                value={dataEdit?.category}
                onChange={(e) => {
                  setDataEdit((pre) => {
                    return {
                      ...pre,
                      category: e.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="portfolio__modal-form-image">
              <img src={dataEdit?.image} alt="" />
              <label htmlFor="imageProduct" className="">
                <i class="bx bx-image-add"></i>
                <span>Add Image</span>
              </label>
              <input
                id="imageProduct"
                type="file"
                hidden
                onChange={updateImage}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioModelEdit;
