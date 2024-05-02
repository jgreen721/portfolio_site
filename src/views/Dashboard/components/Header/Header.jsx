import React from 'react'
import { heroImg } from '../../../../const'
import { ContactBtn } from '../../../../reusables'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="header-content-card">

        <div className="header-column">
            <h1>Rev up <span className="blue">your</span> <span className="grey-block">online</span> presence and <span className="bold blue">maximize</span> your digital footprint.</h1>
            <h4 className="header-caption mid-thin">Transform your website into a powerhouse of visibility and watch your brand soar to new heights with expert design and SEO-optimized strategies tailored just for you!</h4>
            <div className="header-btn-row">
              <ContactBtn/>
            </div>

        </div>

            <div className="header-column img-column">
                <img className="header-img" src={heroImg} alt="" />

            </div>
        </div>
       

    </div>
  )
}

export default Header