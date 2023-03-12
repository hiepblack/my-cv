import React, { useState } from "react";
import { Upload } from "../../hook";
import { toast } from "react-toastify";
import { BASE_URL } from "../../hook";

const TestModelEdit = ({
  setOpenEditTest,
  openEditTest,
  dataUpdate,
  setDataUpdate,
  setTestiData,
  testiData,
}) => {
  const [preview, setPreview] = useState("");
  const editImage = async(e)=>{
    const files = e.target.files;
    const url = await Upload(files)
    toast.success('Upload link image done!');
    setPreview(url);
    setDataUpdate(pre=>{
      return {
        ...pre,image:url
      }
    })
  }
  const handleEditNewTest = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/v1/testimonial/${dataUpdate._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    })
      .then((res) => res.json())
      .then((test) => {
        console.log(test);
        toast.success(test.message);
        if (test.success) {
          const newDataUpdate = testiData?.map((item) => {
            return item._id === dataUpdate._id ? dataUpdate : item;
          });
          setTestiData(newDataUpdate);
          setOpenEditTest(false);
        }
      });
  };
  return (
    <div
      className={
        openEditTest ? "portfolio__modal active-modal" : "portfolio__modal"
      }
    >
      <div className="portfolio__modal-content">
        <i
          className="uil uil-times portfolio__modal-close"
          onClick={() => setOpenEditTest(false)}
        ></i>
        <h3 className="portfolio__modal-title">Edit Testimonial</h3>
        <form className="portfolio__modal-form" onSubmit={handleEditNewTest}>
          <div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Name
              </label>
              <input
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert name"
                value={dataUpdate.testName}
                onChange={(e) => {
                  setDataUpdate((pre) => {
                    return {
                      ...pre,
                      testName: e.target.value,
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
                placeholder="Insert description"
                value={dataUpdate.description}
                onChange={(e) => {
                  setDataUpdate((pre) => {
                    return {
                      ...pre,
                      description: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <input className="button button--flex" type="submit" value="Done!"/>
          </div>

          <div className="portfolio__modal-form-image">
            <img src={preview ? preview : dataUpdate?.image} alt="" />
            <label htmlFor="imageTestUpdate" className="">
              <i class="bx bx-image-add"></i>
              <span>Add Image</span>
            </label>
            <input id="imageTestUpdate" type="file" hidden onChange={editImage}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestModelEdit;
