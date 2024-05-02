import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    const links = [
        {id:1,name:"Home"},
        {id:2,name:"Services"},
        {id:3,name:"Porfolio"},
        {id:4,name:"About"},
        {id:5,name:"FAQ"},
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
        <ul className="nav-links">
            {links.map(link=>(
                <li key={link.id} className="nav-link-item">
                    <a className="nav-link" href="#">{link.name}</a>
                </li>
            ))}
        </ul>
        </div>
        <div className="footer-column">
            <h3><FaLinkedin/></h3>
        </div>
        </div>
        <h5 className="footer-caption">&copy; All Rights Reserved BratzAppz/JGDev 2024</h5>
    </footer>
  )
}

export default Footer