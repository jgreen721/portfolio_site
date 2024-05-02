import React from 'react'
import {SiteLinks} from "../../../../reusables"
import {useAppContext} from "../../../../context/AppContext"
import "./MobileMenu.css";

const MobileMenu = ({showMobile}) => {
  const {toggleMobileMenu} = useAppContext();
  return (
    <div className={showMobile ? "mobile-menu" : "hide-mobile-menu mobile-menu"}>
 
            <SiteLinks listName="mobile-links" linkName="mobile-site-link"/>
    </div>
  )
}

export default MobileMenu