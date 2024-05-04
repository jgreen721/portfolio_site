import React from 'react'
import "./PortfolioSampleItem.css"

const PortfolioSampleItem = ({sample}) => {
  return (
    <li className="portfolio-sample-item">
        <img className="portfolio-sample-img" src={sample.img} alt={sample.img}/>
        <ul className="ux-row">
          <h5>Likes:{Math.random() * 10 | 0}</h5>
          <h5>Comments:{Math.random() * 15 | 0}</h5>
          <button>Like</button>
          <button>Comment</button>
        </ul>
        </li>
  )
}

export default PortfolioSampleItem