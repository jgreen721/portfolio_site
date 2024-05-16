import React, {useEffect,useState,useRef} from 'react'
import {calculate_offset} from '../../../../helpers/calculate_offset'
import {PortfolioSampleItem,MobileInfoDisplay,PortfolioInfo} from "./components"
import { AnimateContent,CommentsSection} from '../../../../reusables'
import "./PortfolioSection.css"
import { useAppContext } from '../../../../context/AppContext'


const PortfolioSection = ({portfolioSection,preAnimatedState}) => {
  const [elementInView,setElementInView] = useState(false)
  const sectionRef = useRef()
  const {allSamples} = useAppContext();
  const [sectionSamples,setSectionSamples] = useState([])
  const [focused,setFocused] = useState({})


  useEffect(()=>{
    if(elementInView){
      sectionRef.current.classList.add("animate-to-center")
    }
  },[elementInView])





  useEffect(()=>{
    if(allSamples.length){
      if(!sectionSamples.length){
            console.log("this is what initially fires!! --- kinda confusing! :)")
            let tempSectionSamples = allSamples.filter(s=>s.category == portfolioSection.name.toLowerCase());
            let translatedSamples = calculate_offset(tempSectionSamples);
                setSectionSamples(translatedSamples)
            let focusedTemp = translatedSamples.filter(sample=>sample.translate == 25)[0];
                setFocused(focusedTemp);
                return;
      }

        
        console.log('just handing focused/comments viewing...');
        
        let commentsSample = allSamples.filter(s=>s.showComments)[0]   //find current comment selection
        if(!commentsSample){            //if none, handle clean-up
        console.log("comments should turn off");
        if(focused.showComments){
          setFocused((focused)=>focused = {...focused,showComments:false})
        }
        return;
        }


        if(commentsSample.title == focused.title){     // turn comments on for sample
         setFocused(commentsSample);
        }
        if(commentsSample.title != focused.title && focused.showComments){     //  close/cleanup from other 3 sections
          setFocused((focused)=>focused = {...focused,showComments:false}) 

        }
        // let updatedFocus = allSamples.filter(t=>t.title == focused.title)[0];
        // setFocused(updatedFocus)
        if(!commentsSample?.title){
          // clean up -- fires unnecessarily for 3 sections though
          // setFocused((focused)=>focused = {...focused,showComments:false})
        }
        else{
          //make sure we update the right section since they all possess a focused
          // if(focused?.title == commentSample.title)setFocused((focused)=>focused = {...focused,showComments:true})

        }
        // let updatedFocus = allSamples.filter(t=>t.title == focused.title)[0];
        // setFocused(updatedFocus)
        // if(commentSample?.title){
        // temp = temp.map(t=>t.title == commentSample.title ? {...t,showComments:true} : {...t,showComments:false});
        // }
        // setSectionSamples(temp);

        //loses single thread as comment responsibility from UI is reliant upon focused rather than the sample itself so, careful!!
        // if(focused?.title == commentSample.title)setFocused((focused)=>focused = {...focused,showComments:true})
        // if(!focused?.title != commentSample.title && focused.showComments)setFocused((focused)=>focused = {...focused,showComments:false})
       
      }
    //   else{
    //     console.log("this is what initially fires!! --- kinda confusing! :)")
    // let tempSectionSamples = allSamples.filter(s=>s.category == portfolioSection.name.toLowerCase());
    // let translatedSamples = calculate_offset(tempSectionSamples);
    // setSectionSamples(translatedSamples)
    // let focusedTemp = translatedSamples.filter(sample=>sample.translate == 25)[0];
    // setFocused(focusedTemp);
    //   }

    // }

  
  },[allSamples]);

  
  const handleCarousel=(dir)=>{
    let temp = sectionSamples;
    console.log('handleCarousel() firing --- ')
    let focusedTemp;
    if(dir == "next"){
        temp = temp.map(((t,idx)=>idx == 0 ? ({...t,translate:temp[temp.length-1].translate}) : {...t,translate:temp[idx-1].translate}))
        focusedTemp = temp.filter(sample=>sample.translate == 25)[0];
        setFocused(focusedTemp)
        setSectionSamples(temp);
        // console.log("shuffled from next")
    }
    if(dir == "prev"){
      temp = temp.map(((t,idx)=>idx == temp.length-1 ? ({...t,translate:temp[0].translate}) : {...t,translate:temp[idx+1].translate}))
      focusedTemp = temp.filter(sample=>sample.translate == 25)[0];
      setFocused(focusedTemp)
      setSectionSamples(temp)
      // console.log("shuffled from prev")
    }
    
  }


  return (
    <AnimateContent setElementInView={setElementInView}>
      <div ref={sectionRef} className={`${preAnimatedState} portfolio-section`}>
        <div className="portfolio-section-header">
            <h2 className="portfolio-section-h2">{portfolioSection.name}</h2>
            <h4 className="mid-thin">{portfolioSection.description}</h4>
        </div>
        <ul className="portfolio-section-samples">
        {sectionSamples.map(sample=>(
          <PortfolioSampleItem key={sample.id} sample={sample}/>
        ))}
             <CommentsSection sample={focused}/>

        </ul>

       <MobileInfoDisplay handleCarousel={handleCarousel} focused={focused}/>
        <div className="desktop-section">
       <PortfolioInfo focused={focused} handleCarousel={handleCarousel}/>
        </div>

        
   
    </div>
    </AnimateContent>
  )
}

export default React.memo(PortfolioSection)