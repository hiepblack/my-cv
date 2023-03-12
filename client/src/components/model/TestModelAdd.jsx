import React, { useState, useRef } from "react";
import { Upload } from "../../hook";
import { toast } from "react-toastify";
import { BASE_URL } from "../../hook";

const TestModelAdd = ({ openAddTest, setOpenAddTest, setTestiData }) => {
  const [addNewTestData, setAddNewTestData] = useState({
    testName: "",
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const testName = useRef();
  const image = useRef();
  const desc = useRef();
  const uploadImage = async (e) => {
    const files = e.target.files;
    const urlImg = await Upload(files);
    console.log(urlImg);
    toast.success('Upload link image done!')
    setAddNewTestData((pre) => {
      return {
        ...pre,
        image: urlImg,
      };
    });
    setLoading(true);
  };
  const handleAddNewTest = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/v1/testimonial`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewTestData),
    })
      .then((res) => res.json())
      .then((test) => {
        toast.success(test.message);
        setTestiData((pre) => {
          return [...pre, { addNewTestData }];
        });
        setOpenAddTest(false);
        testName.current.value = "";
        desc.current.value = "";
        image.current.src = "";
      });
  };
  return (
    <div
      className={
        openAddTest ? "portfolio__modal active-modal" : "portfolio__modal"
      }
    >
      <div className="portfolio__modal-content">
        <i
          className="uil uil-times portfolio__modal-close"
          onClick={() => setOpenAddTest(false)}
        ></i>
        <h3 className="portfolio__modal-title">Add Testimonial</h3>
        <form className="portfolio__modal-form" onSubmit={handleAddNewTest}>
          <div>
            <div className="portfolio__modal-form-div">
              <label htmlFor="" className="portfolio__modal-form-tag">
                Name
              </label>
              <input
                ref={testName}
                type="text"
                className="portfolio__modal-form-input"
                name="name"
                placeholder="Insert name"
                onChange={(e) => {
                  setAddNewTestData((pre) => {
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
                ref={desc}
                name="desc"
                id=""
                cols="30"
                rows="10"
                className="portfolio__modal-form-input "
                placeholder="Insert description"
                onChange={(e) => {
                  setAddNewTestData((pre) => {
                    return {
                      ...pre,
                      description: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <input
              className="button button--flex"
              type="submit"
              value="Done!"
              disabled={loading ? false : true}
            />
          </div>

          <div className="portfolio__modal-form-image">
            <img src={addNewTestData.image} alt="" ref={image} />
            <label htmlFor="imageTest" className="">
              <i class="bx bx-image-add"></i>
              <span>Add Image</span>
            </label>
            <input id="imageTest" type="file" hidden onChange={uploadImage} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestModelAdd;
