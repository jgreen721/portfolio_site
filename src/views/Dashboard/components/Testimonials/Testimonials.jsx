import React from 'react'
import { useAppContext } from '../../../../context/AppContext'
import "./Testimonials.css"


const Testimonials = () => {
  const {testimonials} = useAppContext();



  return (
    <div className="testimonials-container">
      <div className="testimonial-content">
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
    </div>
  )
}

export default Testimonials