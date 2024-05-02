import React from 'react'
import { useAppContext } from '../../../../../../context/AppContext';
import "./SampleItem.css";


const SampleItem = ({sample}) => {
    const {handleSiteView} = useAppContext();



  return (
  <li className="work-sample-item">
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
    <div className="work-sample-item-column sample-img-column">
      <img className="sample-img" src={sample.img} alt="" />
    </div>
  </li>
  )
}

export default SampleItem