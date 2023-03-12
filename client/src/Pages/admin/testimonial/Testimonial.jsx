import React, { useState, useEffect } from "react";
import Banner from "../../../components/banner/Banner";
import "./testimonial.css";
import { Link } from "react-router-dom";
import ListTestimonial from "./ListTestimonial";
import TestModelAdd from "../../../components/model/TestModelAdd";
import { BASE_URL } from "../../../hook";

const Testimonial = () => {
  const [testiData, setTestiData] = useState([]);
  const [openAddTest, setOpenAddTest] = useState(false);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/testimonial`)
      .then((res) => res.json())
      .then(test=>{
        console.log(test)
        setTestiData(test.data);
        setLoading(false);
      });
  },[]);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(testiData)
    const newDataSearch = testiData.filter((item) => item.testName === search);
    console.log(newDataSearch);
    if (newDataSearch.length) {
      setTestiData(newDataSearch);
    } else {
      alert("khong tim thay ten");
    }
  };
  return (
    <div>
      <Banner title="Testimonial" />
      <div className="testimonial__header">
        <div className="testimonial__header-box">
          <h3>List Testimonial</h3>
          <button className="button" onClick={() => setOpenAddTest(true)}>
            Add new+
          </button>
        </div>

        <form className="testimonial__form" onSubmit={handleSearch}>
          <div className="testimonial__form-div">
            <input
              type="text"
              className="testimonial__form-input"
              name="search"
              placeholder="Search name"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="testimonial__form-button" type="submit">
              <i className="bx bx-search-alt-2"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="testimonial__content grid">
        <ListTestimonial
          setTestiData={setTestiData}
          testiData={testiData}
          loading={loading}
        />
      </div>
      <div className="testimonial__panegation">
        <ul>
          <li>
            <Link to="">1</Link>
          </li>
          <li>
            <Link to="">2</Link>
          </li>
          <li>
            <Link to="">3</Link>
          </li>
          <li>
            <Link to="">4</Link>
          </li>
        </ul>
      </div>
      <TestModelAdd
        openAddTest={openAddTest}
        setOpenAddTest={setOpenAddTest}
        setTestiData={setTestiData}
      />
    </div>
  );
};

export default Testimonial;
