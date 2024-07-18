import React, {useState,useEffect,useRef} from 'react'
import { AnimateContent } from '../../../../reusables'
import { useAppContext } from '../../../../context/AppContext'
import {Link} from "react-router-dom"
import {AnswerBoard} from "./components"
import "./FAQ.css"




const FAQ = () => {
  const {faqitems} = useAppContext();
  const [answer,setAnswer] = useState("");
  const [hasHovered,setHasHovered] = useState(false);
  // const {handleSiteView} = useAppContext();
  const [elementInView,setElementInView] = useState(false);
  const elRef = useRef();


  useEffect(()=>{
    if(elementInView){
      // console.log('addclasses-testimonials');
      elRef.current.classList.add("clear-blur")
    }
  },[elementInView])


  const handleSetAnswer = (faq)=>{
    console.log("handleSetAnswer()")
      setAnswer(faq.answer)
  }

  const handleClearAnswer = ()=>{
    setAnswer("");
  }
  return (
    <div id="faq" className="faq-container">
      <AnimateContent setElementInView={setElementInView}>
      <div ref={elRef} className="faq-content-row">
        <div className="faq-column faq-content-column">
          <div className="faq-content-header">
            <div>
          <h2>FA<span className="blue">Q</span></h2>
          </div>
          <div className="faq-caption-row">
            <p>Couldn't find what you're looking for?</p>
            <Link className="contact-link blue" to="/contact">Email Me</Link>
  
          </div>
          </div>
<AnswerBoard answer={answer} hasHovered={hasHovered}/>
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
      </AnimateContent>
    </div>
  )
}

export default FAQ