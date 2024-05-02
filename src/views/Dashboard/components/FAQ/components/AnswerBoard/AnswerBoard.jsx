import React from 'react'
import { PiQuestionThin } from "react-icons/pi";
import "./AnswerBoard.css"

const AnswerBoard = ({answer,hasHovered}) => {
  return (
    <div className="faq-answer-area">
        <div className="no-answer-div">
            <div className={hasHovered ? "no-answer-column slide-left" : "no-answer-column"}>
                <PiQuestionThin style={{fontSize:'5rem'}} />
                <PiQuestionThin style={{fontSize:'5rem'}} />
            </div>
            <div className={hasHovered ? "no-answer-column slide-right" : "no-answer-column"}>
                <PiQuestionThin style={{fontSize:'5rem'}} />
                <PiQuestionThin style={{fontSize:'5rem'}} />
            </div>
       
        </div>
        <div className={hasHovered ? "answer-div animate-answer" :  "answer-div"}>
            <h5>{answer}</h5>
        </div>
        <div className="fake-answer-div"></div>
    </div>
  )
}

export default AnswerBoard