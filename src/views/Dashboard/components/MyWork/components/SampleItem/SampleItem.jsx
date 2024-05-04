import React, {useEffect, useState, useRef} from 'react'
import {AnimateContent} from "../../../../../../reusables"
import { useAppContext } from '../../../../../../context/AppContext';
import "./SampleItem.css";


const SampleItem = ({sample}) => {
    const {handleSiteView} = useAppContext();
    const [elementInView,setElementInView] = useState(false);
    const elRef = useRef();


    useEffect(()=>{
      if(elementInView){
        console.log('addclasses-testimonials');
        elRef.current.classList.add(sample.animatedClassName)
      }
    },[elementInView])

  return (
    <AnimateContent setElementInView={setElementInView}>

  <li ref={elRef} className={`work-sample-item ${sample.preAnimatedClass}`}>
    <div className="work-sample-item-column sample-img-column mobile-sample-column">
      <img className="sample-img" src={sample.img} alt="" />
    </div>
    <div className="work-sample-item-column sample-info-column">
      <h3>{sample.name}</h3>
      <h5 className="sample-blurb mid-thin">{sample.blurb}</h5>
      <ul className="technology-list">
        {sample.technology.map(tech=>(
          <li key={tech.id} className={`tech-item ${tech.color}`}>
            {tech.icon}
          </li>
        ))}
      </ul>
      <div className="button-row">
        <a href={sample.link} target="_blank" className="visit-site-link site-item-link">Visit</a>
        <button  onClick={()=>handleSiteView(sample)} className="view-btn site-item-link">View</button>
      </div>
    </div>
    <div className="work-sample-item-column sample-img-column desktop-sample-column">
      <img className="sample-img" src={sample.img} alt="" />
    </div>
  </li>
  </AnimateContent>
  )
}

export default SampleItem