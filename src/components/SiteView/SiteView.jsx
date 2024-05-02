import React from 'react'
import { useAppContext } from '../../context/AppContext';
import "./SiteView.css"

const SiteView = () => {
  const {siteView,handleSiteView,site} = useAppContext();

  return (
          <div className={siteView ? "site-view" : "site-view hide-view-site"}>
            <div className="site-view-overlay"></div>
            <div className="site-blur-overlay"></div>
            <div className="site-view-card">
                <button className="close-site-btn" onClick={handleSiteView}>X</button>
                <iframe className="site-frame" src={site?.link}></iframe>
            </div>
          </div>
        
  )
}

export default SiteView