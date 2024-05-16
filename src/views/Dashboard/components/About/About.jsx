import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import { Experience } from './components'
import "./About.css"

const About = () => {
  return (
    <div id="about" className="section-container">
      <div className="about-me-content">
        <h1>About <span className="blue">Me</span></h1>
    
    <div className="about-main-row">
      <Canvas style={{height:400,borderRadius:'5px',overflow:"hidden",minWidth:400}}>
        <color attach="background" args={["rgb(35,35,35)"]}/>
        <ambientLight intensity={1}/>
        <OrbitControls enableRotate={false} enableZoom={false}/>
        <Experience/>
      </Canvas>
      <div className="about-me-blurb-container">
          <p className="about-me-blurb">
             Hey there! Well, like the computer I tend be pretty binary in that its usually programming or climbing that gets most of my energy. I enjoy the movement and flow both can accommodate. The challenge of learning a new sequence or code chunk and then the satisfaction that comes in gaining enough ability and understanding for it to open doors to new challenges. A continuous/recursive cycle of engagement and growth. It as well is not uncommon to find me working with either a game or Boston sports radio on in the background, unless its lofi beat time of course! 
          </p>
          <p className="about-me-blurb">
            Beyond the realms of technology and sports, I find solace in the pages of a good book, exploring diverse worlds and ideas. And while I may not always have a controller in hand, childhood me will always be following along with Nintendo and its platform franchises of Mario, Zelda and of course Metroid.
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default About