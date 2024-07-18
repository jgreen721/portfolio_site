import React, {useState, useEffect} from 'react'
import { dataStorageImg, frontendQuizImg,planetsInfoImg,notificationsImg } from '../../../../const'
import { FaCss3,FaHtml5 } from "react-icons/fa";
import { FaVuejs,FaReact  } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { MyWorkHeader, SampleItem } from './components';
import { useAppContext } from '../../../../context/AppContext';
import "./MyWork.css";






const MyWork = ({handleSiteView}) => {
  const {allSamples} = useAppContext();

  const [samples,setSamples] = useState([])


  const findTopSamples=(data)=>{
   
    // console.log("findAndSetTopSamples",data)
    let sortedSamples = data.sort((a,b)=>(b.likes + b.love) - (a.likes + a.love));
    let batch = sortedSamples.slice(0,4);
    return batch;
     }


  useEffect(()=>{
      if(allSamples.length){
      let choosenSamples = []
      let topSamples = findTopSamples(allSamples)

      choosenSamples = topSamples.map((sample,idx)=>{
        let formatedTechnology = [];
        console.log("Sample",sample);
        sample.technology.forEach(tech=>{
          if(tech == "HTML"){
            formatedTechnology.push({id:formatedTechnology.length+1,name:tech,color:"html-orange",icon:<FaHtml5/>})
          }
          if(tech == "CSS"){
            formatedTechnology.push({id:formatedTechnology.length+1,name:tech,color:"css-blue",icon:<FaCss3/>})

          }
          if(tech == "JS"){
            formatedTechnology.push({id:formatedTechnology.length+1,name:tech,color:"js-yellow",icon:<RiJavascriptLine/>})

          }
          if(tech == "React" || tech == "Next"){
            formatedTechnology.push({id:formatedTechnology.length+1,name:tech,color:"react-blue",icon:<FaReact/>})

          }
          if(tech == "Vue"){
            formatedTechnology.push({id:formatedTechnology.length+1,name:tech,color:"vue-green",icon:<FaVuejs/>})

          }
        })
        return {...sample,technology:formatedTechnology,preAnimatedClass:idx%2 == 0 ? 'offset-left' : 'offset-right',animatedClassName:'animate-to-center'}
      })

      console.log('chooseSamples',choosenSamples);
      setSamples(choosenSamples);
    }

  },[allSamples])


  const toggleComments = (sample)=>{
    console.log('toggleComments');
  }

  return (
    <div className="mywork-container">
     <MyWorkHeader/>
      <ul className="samples">
      {samples.map((sample,idx)=>(
<SampleItem toggleComments={toggleComments} handleSiteView={handleSiteView} key={sample.id} sample={sample} idx={idx}/>
      ))}
      </ul>
    </div>
  )
}

export default MyWork