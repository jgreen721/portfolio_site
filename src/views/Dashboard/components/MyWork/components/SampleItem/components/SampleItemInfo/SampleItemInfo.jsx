import React from 'react'
import {SiteLink} from "../../../../../../../../reusables"
import "./SampleItemInfo.css"


const SampleItemInfo = ({sample}) => {
  return (
      <div className="sample-info-column">
        <div className="sample-info-header">
          <h3>{sample.title}</h3>
          <h5 className="sample-blurb mid-thin">{sample.description}</h5>
        </div>
      <ul className="technology-list">
        {sample.technology.map(tech=>(
          <li key={tech.id} className={`tech-item ${tech.color}`}>
            {tech.icon}
          </li>
        ))}
      </ul>
      <div className="button-row">
        <SiteLink payload={sample.site} isLink={true} text={"Visit"}/>
        <SiteLink payload={sample} isLink={false} text={"View"}/>
     
     
      </div>
      </div>
  )
}

export default SampleItemInfo