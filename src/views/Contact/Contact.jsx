import React, {useRef} from 'react'
import "./Contact.css"

const Contact = () => {
  const formRef = useRef();
  return (
    <div className="contact-container">
      <div className="contact-column">
        <div className="contact-header">
        <h1>Cont<span className="blue mid-thin">act</span></h1>
        </div>
      </div>
      <div className="contact-column">
        <form ref={formRef} className="contact-form">
          <div className="form-div">
            <input type="text" name="email" placeholder="Your@Email.com" className="form-control" autoComplete="off" />
          </div>
          <div className="form-div">
            <input type="text" name="subject" placeholder="Subject" className="form-control" autoComplete="off" />
          </div>
        
          
          <div className="form-div contact-div">
            <textarea className="contact-form" placeholder="Ideas or questions"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact