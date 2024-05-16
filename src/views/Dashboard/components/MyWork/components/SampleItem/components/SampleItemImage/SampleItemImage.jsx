import React from 'react'
import {UsersActionsRow} from "../../../../../../../../reusables"
import "./SampleItemImage.css"

const SampleItemImage = ({sample}) => {
  return (
    <div className="sample-img-column">
      <img className="sample-img" src={sample.img} alt="" />
        <div className="sample-reactions-row">
        <UsersActionsRow sample={sample}/>
      </div>
    </div>
  )
}

export default SampleItemImage