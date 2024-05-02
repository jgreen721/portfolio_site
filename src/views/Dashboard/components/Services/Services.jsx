import React from 'react'
import { webDesignImg, webDevImg } from '../../../../const'
import "./Services.css"

const Services = () => {
  const services = [
    {id:1,name:"Web Design",blurb:"My goal is to ensure that your website is of the highest quality. In order to assist with the growth of your online business, I will combine user-friendly design with eye-catching graphics.",img:webDesignImg},
    {id:2,name:"Web Development",blurb:"Once the design is approved I will begin building a functional and responsive website with unique interactions and a content managment system.",img:webDevImg},
  ]
  return (
    <div id="services" className="services-container">
      <div className="services-content">
      <h1 className="services-header">Services</h1>
      <ul className="services-list">
    {services.map(service=>(
      <li key={service.id} className="service-item">
        <div className="service-img-div">
          <img className="service-img" src={service.img} alt="" />
          </div>
          <h2 className="service-title">{service.name}</h2>
          <h5 className="service-blurb mid-thin">{service.blurb}</h5>
      </li>
    ))}
      </ul>
      </div>
    </div>
  )
}

export default Services