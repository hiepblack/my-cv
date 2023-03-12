import React from 'react'
import "./banner.css"

const Banner = ({title}) => {
  return (
    <div className="banner">
        <h2 className="section__title">{title}</h2>
    </div>
  )
}

export default Banner