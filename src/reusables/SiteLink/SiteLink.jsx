import React from 'react'
import { useAppContext } from '../../context/AppContext'
import "./SiteLink.css"




const SiteLink = ({payload,isLink,text}) => {     
// payload = siteLink | focusedSample

  const {handleSiteView} = useAppContext();
  return isLink  ? 
        <a href={payload} target="_blank" className="site-item-link">
          <p>{text}</p>
          </a>
            :
        <button  onClick={()=>handleSiteView(payload)} className="site-link-btn site-item-link">
                    <p>{text}</p>

        </button>

  
}

export default SiteLink