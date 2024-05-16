import React from 'react'
import { PortfolioHeader,PortfolioSection } from './components'
import { useAppContext } from '../../context/AppContext'
import { SiteView } from '../../components'
import "./Portfolio.css"

const Portfolio = () => {
  const {categorySections} = useAppContext();

  return (
    <div className="portfolio-container">
      <PortfolioHeader/>
      <ul className="portfolio-sections">
          {Object.keys(categorySections).map((p,idx)=>(
          <PortfolioSection key={categorySections[p].id} preAnimatedState={idx%2 == 0 ? "offset-left" : "offset-right"} portfolioSection={categorySections[p]}/>
          ))}
      </ul>
      <SiteView/>
    </div>
  )
}

export default Portfolio