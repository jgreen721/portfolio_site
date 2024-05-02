import React, {useEffect,useState,useRef} from 'react'
import { webDesignImg, webDevImg } from '../../../../const'
import { AnimateContent } from '../../../../reusables';
import "./Services.css"

const Services = () => {
  const [elementInView,setElementInView] = useState(false)
  const col1Ref = useRef()
  const col2Ref = useRef()
  const services = [
    {id:1,ref:col1Ref,name:"Web Design",blurb:"My goal is to ensure that your website is of the highest quality. In order to assist with the growth of your online business, I will combine user-friendly design with eye-catching graphics.",img:webDesignImg},
    {id:2,ref:col2Ref,name:"Web Development",blurb:"Once the design is approved I will begin building a functional and responsive website with unique interactions and a content managment system.",img:webDevImg},
  ]
 


  useEffect(()=>{
    if(elementInView){
      console.log('addclasses');
      console.log(col1Ref.current, col2Ref.current);
      col1Ref.current.classList.add("slide-right")
      col2Ref.current.classList.add("slide-left")
    }
  },[elementInView])


  
  return (
    <div id="services" className="services-container">
      <AnimateContent setElementInView={setElementInView}>
      <div className="services-content">
      <h1 className="services-header">Services</h1>
      <ul className="services-list">
    {services.map(service=>(
      <li ref={service.ref} key={service.id} className="service-item">
        <div className="service-img-div">
          <img className="service-img" src={service.img} alt="" />
          </div>
          <h2 className="service-title">{service.name}</h2>
          <h5 className="service-blurb mid-thin">{service.blurb}</h5>
      </li>
    ))}
      </ul>
      </div>
      </AnimateContent>
    </div>
  )
}

export default Services