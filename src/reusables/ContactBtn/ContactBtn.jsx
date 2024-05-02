import React from 'react'
import {Link} from "react-router-dom"
import "./ContactBtn.css"

const ContactBtn = () => {
  return (
      <Link className="contact-link-btn" to="/contact">
        <h5>Contact</h5>
      </Link>
   
  )
}

export default ContactBtn