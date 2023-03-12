import React, { useEffect, useState, useRef } from "react";
import "./portfolio.css";
import Banner from "../../../components/banner/Banner";
import { Link } from "react-router-dom";
import ListCard from "./ListCard";
import PortfolioModelAdd from "../../../components/model/PortfolioModelAdd";
import { BASE_URL } from "../../../hook";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [openModelAdd, setOpenModelAdd] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/project/`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  return (
    <div>
      <Banner title={"Portfolio"} />
      <div className="portfolio__form">
        <form>
          <div className="portfolio__form-div">
            <input
              type="text"
              className="portfolio__form-input"
              name="search"
              placeholder="Search name"
            />
            <button className="portfolio__form-button" type="submit">
              <i class="bx bx-search-alt-2"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="portfolio__content">
        <div className="portfolio__subtitle">
          <h3>List Project</h3>
          <button
            className="button"
            onClick={() => {
              setOpenModelAdd(true);
            }}
          >
            Add New+
          </button>
        </div>
        <div className="portfolio__project grid">
          <ListCard projects={projects} setProjects={setProjects} />
        </div>
        <div className="portfolio__panegation">
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
      </div>
      <PortfolioModelAdd
        openModelAdd={openModelAdd}
        setOpenModelAdd={setOpenModelAdd}
        setProjects={setProjects}
      />
    </div>
  );
};

export default Portfolio;
