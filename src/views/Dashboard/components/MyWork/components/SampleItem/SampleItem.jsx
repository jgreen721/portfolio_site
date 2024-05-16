import React, {useEffect, useState, useRef} from 'react'
import {SampleItemInfo,SampleItemImage} from "./components"
import {AnimateContent} from "../../../../../../reusables"
import { CommentsSection } from '../../../../../../reusables';
import "./SampleItem.css";


const SampleItem = ({sample,idx}) => {
    const [elementInView,setElementInView] = useState(false);
    const elRef = useRef();


    useEffect(()=>{
      if(elementInView){
        // console.log('addclasses-testimonials');
        elRef.current.classList.add(sample.animatedClassName)
      }
    },[elementInView])

  return (
    <AnimateContent setElementInView={setElementInView}>

  <li ref={elRef} className={`work-sample-item ${sample.preAnimatedClass}`}>
    <div className="work-sample-item-column mobile-sample-column">
       <SampleItemImage sample={sample}/>
       {/* <CommentsSection sample={sample}/> */}

    </div>
    <div className="work-sample-item-column">
      <SampleItemInfo sample={sample}/>
    </div>
    <div className="work-sample-item-column sample-img-column desktop-sample-column">
      <SampleItemImage sample={sample}/>
      {/* {sample.showComments &&  <Comments/>} */}


     {/* <CommentsSection sample={sample}/> */}

    </div>
         <CommentsSection sample={sample}/>

  </li>
  </AnimateContent>
  )
}

export default SampleItem