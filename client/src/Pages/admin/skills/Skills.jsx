import React, { useEffect, useState } from "react";
import "./skill.css";
import { Link } from "react-router-dom";
import Banner from "../../../components/banner/Banner";
import ListKill from "./ListKill";
import SkillModelAdd from "../../../components/model/SkillModelAdd";
import SkillModelEdit from "../../../components/model/SkillModelEdit";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../hook";

const Skills = () => {
  const [openModel, setOpenModel] = useState(false);
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [data, setData] = useState([]);
  const [editNewSkillData, seteditNewSkillData] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/skill/`).then((res) =>
      res.json().then((skill) => {
        setData(skill.skills)
      })
    );
  }, []);

  const handleEditSkill = (id) => {
    console.log(id);
    setOpenModelEdit(true);
    const newDataEdit = data.find((item) => item._id === id);
    seteditNewSkillData(newDataEdit);
  };
  const handleEditNewProject = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/v1/skill/${editNewSkillData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editNewSkillData),
    })
      .then((res) => res.json())
      .then((skill) => {
        toast.success(skill.message);
        if (skill.success) {
          const updateSkill = data.map((item) => {
            return item._id === editNewSkillData._id ? editNewSkillData : item;
          });
          console.log(updateSkill);
          setData(updateSkill);
          setOpenModelEdit(false);
        }
      });
  };
  return (
    <div>
      <Banner title={"Skills"} />
      <div className="skills__content__admin">
        <div className="skills__subtitle__admin">
          <h3>List Skills</h3>
          <button
            className="button"
            onClick={() => {
              setOpenModel(true);
            }}
          >
            Add New+
          </button>
        </div>
        <div className="skills__project grid">
          <ListKill
            data={data}
            handleEditSkill={handleEditSkill}
            setData={setData}
          />
        </div>
        <div className="skills__panegation">
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
      {/* model add */}
      <SkillModelAdd
        setOpenModel={setOpenModel}
        openModel={openModel}
        setData={setData}
      />
      {/* model edit */}
      <SkillModelEdit
        openModelEdit={openModelEdit}
        setOpenModelEdit={setOpenModelEdit}
        editNewSkillData={editNewSkillData}
        seteditNewSkillData={seteditNewSkillData}
        handleEditNewProject={handleEditNewProject}
      />
    </div>
  );
};

export default Skills;
