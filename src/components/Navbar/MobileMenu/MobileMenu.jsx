import React from 'react'
import {Link} from "react-router-dom"
import {useAppContext} from "../../../context/AppContext"
import "./MobileMenu.css";

const MobileMenu = ({links,showMobile}) => {
  const {toggleMobileMenu} = useAppContext();
  return (
    <div className={showMobile ? "mobile-menu" : "hide-mobile-menu mobile-menu"}>
           <ul className="mobile-links">
                {links.map(link=>(
                    link.link[0] == "#"?
                <li 
                    onClick={(e) => {
                    // e.preventDefault();
                    toggleMobileMenu()
                    window.history.replaceState({}, document.title, "/"); // Reset URL to "/"
                  }}
                    key={link.id} 
                    className="nav-link-item">
                    <a className="mobile-site-link" href={link.link}>
                       <h5> {link.name} </h5>
                    </a>
                </li>
                :
                <Link onClick={toggleMobileMenu} key={link.id} className="nav-link-item mobile-site-link" to={link.link}>
                       <h5> {link.name} </h5>
                </Link>
            ))}
            </ul>
    </div>
  )
}

export default MobileMenu