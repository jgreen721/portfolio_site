import React, {useState} from 'react'
import "./FormDiv.css"

const FormDiv = ({isTextArea,name,placeholder,hasError,error,clearError}) => {
                
  return  isTextArea ?
        <div className="form-div contact-div">
            <textarea onInput={()=>{
                if(hasError)clearError(name)}} className={hasError ? "contact-textarea error-input form-input" : "contact-textarea form-input"} name={name} placeholder={placeholder}/>
                <div className="error-div">
                    <p className={hasError ? "error show-error" : "error hide-error"}>{error}</p>
                </div>
        </div>
                    :
         <div className="form-div">
                <input onInput={()=>{
                    if(hasError)clearError(name)}} type="text" name={name} placeholder={placeholder} className={hasError ? "form-control error-input form-input" : "form-control form-input"}autoComplete="off" />
                    <div className="error-div">
                        <p className={hasError ? "error show-error" : "error hide-error"}>{error}</p>
                    </div>

         </div>
  
}

export default FormDiv