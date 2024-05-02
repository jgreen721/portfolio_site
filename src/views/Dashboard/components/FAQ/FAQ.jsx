import React, {useState} from 'react'
import { useAppContext } from '../../../../context/AppContext'
import {Link} from "react-router-dom"
import "./FAQ.css"
import { PiQuestionThin } from "react-icons/pi";




const FAQ = () => {
  const {faqitems} = useAppContext();
  const [answer,setAnswer] = useState("");
  const [hasHovered,setHasHovered] = useState(false);


  const handleSetAnswer = (faq)=>{
    console.log("handleSetAnswer()")
      setAnswer(faq.answer)
  }

  const handleClearAnswer = ()=>{
    setAnswer("");
  }
  return (
    <div id="faq" className="faq-container">
      <div className="faq-content-row">
        <div className="faq-column faq-content-column">
          <div>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-caption-row">
            <p>Couldn't find what you're looking for?</p>
            <Link className="contact-link blue" to="/contact">Email Me</Link>
  
          </div>
          </div>
          <div className="faq-answer-area">
            {/* {answer ? 
             <div className="answer-div">
                <h5>{answer}</h5>
            </div>
            :
              <div className="no-answer-div">
              <PiQuestionThin style={{fontSize:'5rem'}} />
              <PiQuestionThin style={{fontSize:'5rem'}} />
              <PiQuestionThin style={{fontSize:'5rem'}} />
              <PiQuestionThin style={{fontSize:'5rem'}} />

              </div>
              } */}


              <div className="no-answer-div">
                <div className={hasHovered ? "no-answer-column slide-left" : "no-answer-column"}>
                <PiQuestionThin style={{fontSize:'5rem'}} />
                <PiQuestionThin style={{fontSize:'5rem'}} />
                </div>
                <div className={hasHovered ? "no-answer-column slide-right" : "no-answer-column"}>

                <PiQuestionThin style={{fontSize:'5rem'}} />
                <PiQuestionThin style={{fontSize:'5rem'}} />
                </div>
                <div className={hasHovered ? "answer-div scale-answer" :  "answer-div"}>
                    <h5>{answer}</h5>
                </div>
            </div>
             
            </div>
        </div>
        <div className="faq-column">
         <ul className="faqs-list">
           {faqitems.map(faq=>(
             <li onClick={()=>handleSetAnswer(faq)} 
                 onMouseEnter={()=>{
                      if(!hasHovered)setHasHovered(true);
                             handleSetAnswer(faq)
                            }} 
               onMouseLeave={handleClearAnswer} 
               key={faq.id} 
               className="faq-item">
               <h4>{faq.question}</h4>
              </li>
           ))}
         </ul>
        </div>
      </div>
    </div>
  )
}

export default FAQ