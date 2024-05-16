import React from 'react'
import { heroImg } from '../../../../const'
import { ContactBtn } from '../../../../reusables'
import "./Header.css"
import {motion} from "framer-motion"
import { initialSlideRight, animateSlideRight, initialFadeIn, animateFadeIn } from '../../../../animations'

const Header = () => {
  return (
    <div className="header">
        <div className="header-content-card">

        <div className="header-column">
            <motion.h1 initial={initialSlideRight} animate={animateSlideRight} transition={{duration:.5}}>Rev up <span className="blue hide-header">your</span> <span className="grey-block">online</span> presence and <span className="bold blue">maximize</span> your digital footprint.</motion.h1>
            <h4 className="header-caption mid-thin">Transform your website into a powerhouse of visibility and watch your brand soar to new heights with expert design and SEO-optimized strategies tailored just for you!</h4>
            <div className="header-btn-row">
              <ContactBtn/>
            </div>

        </div>

            <motion.div initial={initialFadeIn} animate={animateFadeIn} transition={{delay:.5,duration:1.5}} className="header-column img-column">
                <img className="header-img" src={heroImg} alt="" />


            </motion.div>
        </div>
       

    </div>
  )
}

export default Header