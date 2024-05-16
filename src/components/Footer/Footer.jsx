import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiteLinks } from '../../reusables';
import "./Footer.css"

const Footer = () => {
    const links = [
        {id:1,name:"Home",link:"/"},
        {id:2,name:"Services",link:"#services"},
        {id:3,name:"Portfolio",link:"/portfolio"},
        {id:4,name:"About",link:"#about"},
        {id:5,name:"FAQ",link:"#faq"},
        // {id:6,name:"Contact"},
    ]
  return (
    <footer className="footer">
        <div className="main-footer-row">
        <div className="footer-column">
            <div>
                <h3 className="no-wrap">Justin G</h3>
                <small>
                Developer & Designer
                </small>
            </div>
        </div>
        <div className="footer-column">
<SiteLinks listName="footer-links" linkName="footer-link" />
        </div>
        <a href="https://www.linkedin.com/in/justin-green-2484513b/" target="_blank" className="linkedin-btn">
            <h3><FaLinkedin className="blue"/></h3>
        </a>
        </div>
        <h5 className="footer-caption">&copy; All Rights Reserved BratzAppz/JGDev 2024</h5>
    </footer>
  )
}

export default Footer