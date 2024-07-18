import React, {useEffect, useRef,useState} from 'react'
import { AnimateContent } from '../../../../reusables';
import { useAppContext } from '../../../../context/AppContext'
import { useInView } from "react-intersection-observer";

import "./Testimonials.css"


const Testimonials = () => {
  const [elementInView, setElementInView] = useState(false)
  const elRef = useRef()

  const {testimonials} = useAppContext();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });



  // useEffect(()=>{
  //   if(inView){
  //     console.log('addclasses-testimonials',entry);
  //     entry.target.classList.add("rise-up-fade-in")
  //   }
  // },[inView])


  useEffect(()=>{
    if(elementInView){
      // console.log('addclasses-testimonials');
      elRef.current.classList.add("rise-up-fade-in")
    }
  },[elementInView])




  return (
    <div className="testimonials-container">
    <AnimateContent setElementInView={setElementInView}>

      {/* <div ref={ref} className="testimonial-content"> */}
      <div ref={elRef} className="testimonial-content">
      <h1>Testimonials</h1>
      <ul className="testimonials">
        {testimonials.map(t=>(
          <li className={t.id == 2 ? "testimonial-card tall-card" : "testimonial-card"} key={t.id}>
            <h4 className="testimonial-blurb thin">{t.testimonial}</h4>
            <h3>{t.author}</h3>
          </li>

        ))}
      </ul>
      </div>
      </AnimateContent>
    </div>
  )
}

export default Testimonials