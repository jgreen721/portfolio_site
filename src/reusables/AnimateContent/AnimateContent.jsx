import React, {useEffect, useRef} from 'react'
import { useInView } from "react-intersection-observer";

const AnimateContent = ({children,setElementInView}) => {

    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });


    useEffect(()=>{
    
        if(inView){
            setElementInView(true);
            // console.log('animate element from its component')
        }
      },[inView])
  return (
    <div ref={ref}>
        {children}
    </div>
  )
}

export default AnimateContent