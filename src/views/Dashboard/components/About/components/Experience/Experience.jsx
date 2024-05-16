import React, { useEffect,useState } from 'react'
import { useFrame } from '@react-three/fiber';
import {useGLTF,Float, useAnimations} from "@react-three/drei"


const Scene = ()=>{
    const img = useGLTF("./animatedscene.glb");
    const [pos,setPos] = useState([0,-1.15,.85])
    const {actions,mixer} = useAnimations(img.animations,img.scene)


    // console.log(img)

    useEffect(()=>{

      if(innerWidth < 650){
        setPos([.2,-1,0])
      }
    })
    useFrame(()=>{
      img.animations.forEach(animation=>{
          let action = mixer.clipAction(animation)
          action.play();
      
        
       })
    })

    onresize=()=>{

      if(innerWidth < 650){
        setPos([.2,-1,0])
      }
      else{
        setPos([0,-1.15,.85])
      }
    }

    return (
        <Float floatIntensity={.3} >
        <group>
            <pointLight position={[0,1,1]} intensity={4}/>
            {/* <pointLight position={[-.75,-.75,3]} intensity={4}/> */}
            <directionalLight position={[-.75,-.75,5]} intensity={2}/>
            <primitive rotation={[0,-Math.PI * .25,0]} position={pos} scale={.6} object={img.scene}/>
        </group>
        </Float>
    )
}

const Experience = () => {
  return (
    <group>
        <Scene/>
    </group>
  )
}

export default Experience