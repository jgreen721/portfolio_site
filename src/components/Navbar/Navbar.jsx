import React from 'react'
import { Link } from 'react-router-dom'
import { ContactBtn } from '../../reusables'
import { Squash as Hamburger } from 'hamburger-react'
import MobileMenu from "./MobileMenu/MobileMenu"
import { useAppContext } from '../../context/AppContext'
import "./Navbar.css"


const Navbar = () => {
    const links = [
        {id:1,name:"Home",link:"/"},
        {id:2,name:"Services",link:"#services"},
        {id:3,name:"Portfolio",link:"/portfolio"},
        {id:4,name:"About",link:"#about"},
        {id:5,name:"FAQ",link:"#faq"},
        // {id:6,name:"Contact"},
    ]
    const {showMobile,toggleMobileMenu} = useAppContext();
  return (
    <nav className="nav">
        <div className="nav-content">
        <div className="nav-content-row">
            <div className="nav-overlay"></div>
            <div className="nav-filter"></div>
            <div className="nav-column">
                <div className="logo-div">
                    <h1 className="logo-text logo-h1 logo-h1-one">J</h1>
                    <h1 className="logo-text logo-h1 logo-h1-two">G</h1>
                    <p className="logo-text logo-dev">DEV</p>
                </div>
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
            <ul className="site-links">
                {links.map(link=>(
                    link.link[0] == "#"?
                <li 
                    onClick={(e) => {
                    // e.preventDefault();
                    window.history.replaceState({}, document.title, "/"); // Reset URL to "/"
                  }}
                    key={link.id} 
                    className="nav-link-item">
                    <a className="site-link" href={link.link}>
                       <h5> {link.name} </h5>
                    </a>
                </li>
                :
                <Link key={link.id} className="nav-link-item site-link" to={link.link}>
                       <h5> {link.name} </h5>
                </Link>
            ))}
            </ul>
         <ContactBtn/>
         </div>
         <div className="mobile-nav-column">
             <button onClick={toggleMobileMenu} className="burger-btn">
            <Hamburger color="white"/>
            </button>

         </div>
        
        </div>
        <MobileMenu  showMobile={showMobile} links={links}/>
    </div>
    </div>
</nav>
  )
}

export default Navbar


