import React from 'react'
import "./PortfolioSampleItem.css"

const PortfolioSampleItem = ({sample}) => {
  return (
    <li style={{left:`${sample.translate}%`,zIndex:sample.translate == 25 ? 5 : 1}} className={sample.translate == 25 ? "portfolio-sample-item focused" : "portfolio-sample-item distanced-item"}>
        <img className="portfolio-sample-img" src={sample.img} alt={sample.img}/>
    </li>
  )
}

export default PortfolioSampleItem



