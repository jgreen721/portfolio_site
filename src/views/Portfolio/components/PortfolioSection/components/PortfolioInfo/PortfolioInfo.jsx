import React from 'react'
import { SiteLink,UsersActionsRow } from '../../../../../../reusables'
import "./PortfolioInfo.css"

const PortfolioInfo = ({focused,handleCarousel}) => {
  return (
<div className="portfolio-actions-info-row">
    <button className="carousel-btn prev-btn" onClick={()=>handleCarousel('next')}>Next</button> 
    {focused?.title && 
    <div className="sample-info">
        <h4>{focused.title}</h4>
        <h5 className="sample-description mid-thin">{focused.description}</h5>
        <div className="portfolio-site-links-row">
            <SiteLink payload={focused.site} isLink={true} text="Visit">Visit</SiteLink>
            <SiteLink payload={focused} isLink={false} text="View"></SiteLink>
        </div>
        <div className="portfolio-actions-column">
        <UsersActionsRow sample={focused}/>
        </div>
       {/* <CommentsSection sample={focused}/> */}

    </div>
}
    <button className="carousel-btn next-btn" onClick={()=>handleCarousel('prev')}>Prev</button>

</div> 

  )
}

export default PortfolioInfo