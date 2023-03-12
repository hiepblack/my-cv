import React from 'react'
import "./skills.css"
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <div className="skills section" id="skills">
        <h2 className="section__title">Skills Me</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
        </div>
    </div>
  )
}

export default Skills