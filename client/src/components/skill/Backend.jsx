import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../hook";

const Backend = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/skill/`)
      .then((res) => res.json())
      .then((data) => {
        const dataFontEnd = data.skills.filter((item) => {
          return item.role === "BackEnd";
        });
        setLoading(true);
        setData(dataFontEnd);
      });
  }, []);
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {loading &&
            data.map((item) => {
              return (
                <div className="skills__data">
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{item.name}</h3>
                    <span className="skills__level">{item.level}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Backend;
