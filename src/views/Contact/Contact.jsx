import React, {useRef} from 'react'
import {sendEmail} from "../../helpers/email"
import "./Contact.css"

const Contact = () => {
  const formRef = useRef();



  const handleFormSubmit = async(e)=>{
    e.preventDefault();

    let emailForm = new FormData(formRef.current);
        let emailData = {
          from:emailForm.get("email"),
          subject:emailForm.get("subject"),
          body:emailForm.get("body"),
        }
        console.log("EmailForm",emailData);
        await sendEmail();

  }
  return (
    <div className="contact-container">
      <div className="contact-column">
        <div className="contact-header">
        <h1>Cont<span className="blue mid-thin">act</span></h1>
        </div>
      </div>
      <div className="contact-column">
        <form onSubmit={handleFormSubmit} ref={formRef} className="contact-form">
          <div className="form-div">
            <input type="text" name="email" placeholder="Your@Email.com" className="form-control" autoComplete="off" />
          </div>
          <div className="form-div">
            <input type="text" name="subject" placeholder="Subject" className="form-control" autoComplete="off" />
          </div>
        
          
          <div className="form-div contact-div">
            <textarea className="contact-form" name="body" placeholder="Ideas or questions"/>
          </div>
          <div className="form-div">
            <button className="btn contact-me-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact