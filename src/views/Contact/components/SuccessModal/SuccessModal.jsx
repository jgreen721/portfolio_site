import React from 'react'
import "./SuccessModal.css"
import { CiCircleCheck } from "react-icons/ci";


const SuccessModal = ({showSuccess}) => {
  return (
    <div className="success-div">
      <div className={showSuccess ? "success-row show-success-alert" : "success-row"}>
            <CiCircleCheck className="check-icon"/>
            <h4 className="mid-thin success-text">Email was successfully sent!</h4>
      </div>
   </div>
  )
}

export default SuccessModal