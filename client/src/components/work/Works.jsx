import React, { useEffect, useState } from "react";
import { projectNav } from "./Data";
import WorkItems from "./WorkItems";
import { BASE_URL } from "../../hook";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      fetch(`${BASE_URL}/api/v1/project/`)
        .then((res) => res.json())
        .then((data) => {
          setProjects(data.projects);
        });
    } else {
      const filter = async () => {
        const res = await  fetch(`${BASE_URL}/api/v1/project/`);
        const data = await res.json();
        const newProject = data.projects.filter((project) => {
          return project.category === item.name;
        });
        setProjects(newProject);
      };
      filter()
    }
  }, [item]);
  const handleClick = (e, index) => {
    console.log(e.target.textContent);
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filter">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={
                active === index ? "active-work work__item" : "work__item"
              }
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
