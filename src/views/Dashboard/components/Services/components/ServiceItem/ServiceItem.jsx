import React, {useEffect,useState,useRef} from 'react'
import {AnimateContent} from "../../../../../../reusables"
import "./ServiceItem.css"

const ServiceItem = ({service}) => {
    const [elementInView,setElementInView] = useState(false)
    const elRef = useRef()


    useEffect(()=>{
        if(elementInView){
          elRef.current.classList.add("animate-to-center")
        }
      },[elementInView])
  return (
    <AnimateContent setElementInView={setElementInView}>

    <li ref={elRef} key={service.id} className={`service-item ${service.preAnimatedState}`}>
    <div className="service-img-div">
      <img className="service-img" src={service.img} alt="" />
      </div>
      <h2 className="service-title">{service.name}</h2>
      <h5 className="service-blurb mid-thin">{service.blurb}</h5>
  </li>
  </AnimateContent>
  )
}

export default ServiceItem