import React from 'react'
import { ContactBtn,SiteLinks } from '../../reusables'
import { Squash as Hamburger } from 'hamburger-react'
import {MobileMenu,Logo} from "./components"
import { useAppContext } from '../../context/AppContext'
import {motion} from "framer-motion"
import { initialHorizontalScale,animateScaleHorizontally } from '../../animations'
import "./Navbar.css"


const Navbar = () => {
 
    const {showMobile,toggleMobileMenu} = useAppContext();
  return (
    <nav className="nav">
        <motion.div initial={initialHorizontalScale} animate={animateScaleHorizontally} transition={{type:"spring"}} className="nav-content">
        <div className="nav-content-row">
            <div className="nav-overlay"></div>
            <div className="nav-filter"></div>
            <div className="nav-column">
             <Logo/>
                <div className="nav-user-info">
                    <div className="nav-username-row">
                        <h2 className="">Justin</h2>
                        <h2>G</h2>
                    </div>
                    <h5>
                Developer & Designer
                    </h5>
                </div>
            </div>
        <div className="nav-column">
            <div className="desktop-nav-column">
   <SiteLinks listName="nav-links" linkName="nav-link"/>
         <ContactBtn/>
         </div>
         <div className="mobile-nav-column">
             <button onClick={toggleMobileMenu} className="burger-btn">
            <Hamburger toggled={showMobile}  color="white"/>
            </button>

         </div>
        
        </div>
        <MobileMenu  showMobile={showMobile}/>
    </div>
    </motion.div>
</nav>
  )
}

export default Navbar


