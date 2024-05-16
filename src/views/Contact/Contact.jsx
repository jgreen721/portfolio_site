import React, {useEffect, useRef, useState} from 'react'
import {SuccessModal} from "./components"
import { FormDiv } from '../../reusables'
import {sendEmail} from "../../helpers/email"
import {Canvas,useFrame} from "@react-three/fiber"
import {useGLTF,Environment, useAnimations} from "@react-three/drei"
import {motion} from "framer-motion"
import { initialSlideRight, animateSlideRight, initialHorizontalScale, animateScaleHorizontally, initialFadeIn, animateFadeIn } from '../../animations'
import * as THREE from "three"
import "./Contact.css"



const MailBox = ({showSuccess})=>{
  const img = useGLTF("./mailbox.glb");
  const {actions,mixer} = useAnimations(img.animations,img.scene)


  // useFrame(()=>{
  //   img.animations.forEach((animation,idx)=>{
  //     let action = mixer.clipAction(animation);
  //     action.play();
  //     action.clampWhenFinished = true;
  //     action.loop = THREE.LoopOnce;
  //     action.clampWhenFinished = true;

  
  //   })
  // })


  useEffect(()=>{
    if(showSuccess){
    playAnimation()
    }
  },[showSuccess])


  const playAnimation = () => {
    img.animations.forEach((animation) => {
      let action = mixer.clipAction(animation);
      
      // Play the animation if it's not playing
      if (!action.isRunning()) {
        action.reset();
        action.play();
      }
      
      // Stop the animation when it finishes
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
      
      // Remove the animation from the mixer when it finishes
      // action.setLoop(THREE.LoopOnce, 1);
      // action.clampWhenFinished = true;
      // action.onFinish(() => {
      //   mixer.uncacheAction(action);
      // });
    });
  };

  return (
    <group>
      {/* <pointLight intensity={2} position={[0,1,0]}/> */}
      <directionalLight intensity={15} position={[0,1,0]}/>
      <primitive scale={2} position={[0,-5.25,0]} object={img.scene}/>
   
    </group>
  )
}

const Contact = () => {
  const formRef = useRef();
  const [error,setError] = useState("Invalid input, please fix something!")
  const [showSuccess,setShowSuccess] = useState(false);
  const [inputs,setInputs] = useState([
    {id:1,name:"email",placeholder:"Your@Email.com",error:"Invalid Email",hasError:false,isTextArea:false},
    {id:2,name:"subject",placeholder:"Subject",error:"Invalid Subject",hasError:false,isTextArea:false},
    {id:3,name:"body",placeholder:"Ideas or Questions",error:"Invalid Email",hasError:false,isTextArea:true},
  ])


  const handleFormSubmit = async(e)=>{
    e.preventDefault();

    let emailForm = new FormData(formRef.current);
        let emailData = {
          from:emailForm.get("email"),
          subject:emailForm.get("subject"),
          body:emailForm.get("body"),
        }
        // console.log("EmailForm",emailData);
        if(!emailData.from)setInputs((inputs)=>inputs.map((input,idx)=>idx == 0 ? ({...input,hasError:true}) : input))
        if(!emailData.subject)setInputs((inputs)=>inputs.map((input,idx)=>idx == 1 ? ({...input,hasError:true}) : input))
        if(!emailData.body)setInputs((inputs)=>inputs.map((input,idx)=>idx == 2 ? ({...input,hasError:true}) : input))
        if(emailData.from && emailData.subject && emailData.body){
          console.log(formRef.current);
          formRef.current.querySelectorAll(".form-input").forEach(input=>input.value = "");
        await sendEmail(emailData);
        toggleSuccess();
        }

  }

  const clearError = (name)=>{
    console.log('clearERROR')
    if(name == "email")setInputs((inputs)=>inputs.map((input,idx)=>idx == 0 ? ({...input,hasError:false}) : input))
    if(name == "subject")setInputs((inputs)=>inputs.map((input,idx)=>idx == 1 ? ({...input,hasError:false}) : input))
    if(name == "body")setInputs((inputs)=>inputs.map((input,idx)=>idx == 2 ? ({...input,hasError:false}) : input))

  }

  const toggleSuccess = ()=>{
    setShowSuccess(true);
    setTimeout(()=>setShowSuccess(false),2000);
  }
  return (
    <div className="contact-container">
      <div className="contact-column">
        <motion.div initial={initialSlideRight} animate={animateSlideRight} transition={{duration:.5}} className="contact-header">
          <h1>Cont<span className="blue mid-thin">act</span></h1>
          <SuccessModal showSuccess={showSuccess}/>
        </motion.div>
        <Canvas style={{position:"absolute",inset:"0"}}>
          <Environment preset="city"/>
          <ambientLight intensity={.3}/>
          <MailBox showSuccess={showSuccess}/>
        </Canvas>
      </div>
      <motion.div initial={initialHorizontalScale} animate={animateScaleHorizontally} transition={{delay:.25,type:"spring"}} className="contact-column">
        <form onSubmit={handleFormSubmit} ref={formRef} className="contact-form">
        {inputs.map(input=>(
          <FormDiv key={input.id} isTextArea={input.isTextArea} name={input.name} placeholder={input.placeholder} error={input.error} hasError={input.hasError} clearError={clearError}/>
        ))}
        <button className="contact-me-btn">Send</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact