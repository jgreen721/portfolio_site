import React from 'react'
import {Link} from "react-router-dom"
import { useAppContext } from '../../context/AppContext'
import "./SiteLinks.css"


const SiteLinks = ({listName,linkName}) => {
    const links = [
        {id:1,name:"Home",link:"/"},
        {id:2,name:"Services",link:"#services"},
        {id:3,name:"Portfolio",link:"/portfolio"},
        {id:4,name:"About",link:"#about"},
        {id:5,name:"FAQ",link:"#faq"},
        // {id:6,name:"Contact"},
    ]
    const {toggleMobileMenu} = useAppContext()
  return (
    <ul className={listName}>
    {links.map(link=>(
                link.link[0] == "#"?
            <li 
                onClick={(e) => {
                // e.preventDefault();
                if(listName == "mobile-links")toggleMobileMenu();
                window.history.replaceState({}, document.title, "/"); // Reset URL to "/"
              }}
                key={link.id} 
                className={`nav-link-item ${linkName}`}>
                <a className="site-link" href={link.link}>
                   <h5> {link.name} </h5>
                </a>
            </li>
            :
            <Link onClick={()=>{
              if(listName == "mobile-links")toggleMobileMenu();

            }} key={link.id} className={`site-link ${linkName}`} to={link.link}>
                   <h5> {link.name} </h5>
            </Link>
        ))}
    </ul>
  )
}

export default SiteLinks