import React from 'react'
import {SiteLinks,ContactBtn} from "../../../../reusables"
import {useAppContext} from "../../../../context/AppContext"
import "./MobileMenu.css";

const MobileMenu = ({showMobile}) => {
  const {toggleMobileMenu} = useAppContext();
  return (
    <div className={showMobile ? "mobile-menu" : "hide-mobile-menu mobile-menu"}>
 
            <SiteLinks listName="mobile-links" linkName="mobile-site-link"/>
            <button className="transparent-btn" onClick={toggleMobileMenu}>
              <ContactBtn/>
            </button>
    </div>
  )
}

export default MobileMenu