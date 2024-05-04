import React from 'react'
import {PortfolioSampleItem} from "./components"
import "./PortfolioSection.css"


const PortfolioSection = ({portfolioSection}) => {
  return (
    <div className="portfolio-section">
        <div className="portfolio-section-header">
            <h2>{portfolioSection?.level}</h2>
            <h4 className="mid-thin">{portfolioSection.description}</h4>
        </div>
        <ul className="portfolio-section-samples">
        {portfolioSection.samples.map(sample=>(
          <PortfolioSampleItem key={sample.id} sample={sample}/>
        ))}
        </ul>
    </div>
  )
}

export default PortfolioSection