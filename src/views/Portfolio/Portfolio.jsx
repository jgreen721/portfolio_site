import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { PortfolioHeader,PortfolioSection } from './components'
import "./Portfolio.css"

const Portfolio = () => {
  const {portfolioData} = useAppContext();
  console.log(portfolioData)
  return (
    <div className="portfolio-container">
      <PortfolioHeader/>
      <ul className="portfolio-sections">
        {portfolioData.map(p=>(
          <PortfolioSection key={p.id} portfolioSection={p}/>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio