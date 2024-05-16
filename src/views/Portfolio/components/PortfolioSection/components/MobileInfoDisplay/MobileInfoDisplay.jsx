import React from 'react'
import { UsersActionsRow,SiteLink, CommentsSection } from '../../../../../../reusables'
import "./MobileInfoDisplay.css"

const MobileInfoDisplay = ({handleCarousel,focused}) => {
  return focused?.title && (
    <div className="mobile-sample-action-column">
    <div className="mobile-btns-row">
       <button className="carousel-btn prev-btn" onClick={()=>handleCarousel('next')}>Next</button>
       <button className="carousel-btn next-btn" onClick={()=>handleCarousel('prev')}>Prev</button>
   </div> 
    
 <div className="sample-info">
   <h4>{focused.title}</h4>
   <h5 className="sample-description mid-thin">{focused.description}</h5> 
   {/* <CommentsSection sample={focused}/> */}
<div>
  <div className="portfolio-actions-column">
     <UsersActionsRow sample={focused}/>
  </div>
     <div className="portfolio-site-links-row">
       <SiteLink payload={focused.site} isLink={true} text="Visit"></SiteLink>
       <SiteLink payload={focused} isLink={false} text="View"></SiteLink>
     </div>
 </div>
   
</div>

</div>
  )
}

export default MobileInfoDisplay