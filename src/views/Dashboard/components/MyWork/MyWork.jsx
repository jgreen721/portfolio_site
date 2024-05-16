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
  // const samples = [
  //   {id:1,title:"Data-Storage Design",technology:[{id:1,name:"JS",color:"js-yellow",icon:<RiJavascriptLine/>},{id:2,name:"HTML",color:"html-orange",icon:<AiOutlineHtml5/>},{id:3,name:"CSS",color:"css-blue",icon:<FaCss3/>}],description:"This data storage UI sample boasts pleasing CSS and SVG animations, enhancing user engagement. Mock skeleton loaders reduce wait times, maintaining a seamless experience.",img:dataStorageImg,site:"https://jgreen721.github.io/frontend_challenges/fylodatastorage_redo/",preAnimatedClass:"offset-left",animatedClassName:"slide-right"},
  //   {id:2,title:"Frontend Quiz",technology:[{id:1,name:"React",color:"react-blue",icon:<FaReact/>}],description:"Dive into interactive learning with this frontend quiz app. Combining HTML, CSS, and JavaScript, it offers engaging quizzes with pleasing animations. Track your progress in real-time as you answer questions, creating a personalized learning experience.",img:frontendQuizImg,site:"https://fe-quiz.vercel.app/",preAnimatedClass:"offset-right",animatedClassName:"slide-left"},
  //   {id:3,title:"Planets Info",technology:[{id:1,name:"Vue",color:"vue-green",icon:<FaVuejs/>}],description:"Embark on a cosmic adventure with this Vue-powered planets info app. Leveraging Vue's store and features, it offers seamless data retrieval and stunning visuals. Explore rich information about each planet in a captivating, immersive experience.",img:planetsInfoImg,site:"https://planetsapp-vue.vercel.app/",preAnimatedClass:"offset-left",animatedClassName:"slide-right"},
  //   {id:4,title:"Notifications Sample",technology:[{id:1,name:"JS",color:"js-yellow",icon:<RiJavascriptLine/>},{id:2,name:"HTML",color:"html-orange",icon:<AiOutlineHtml5/>},{id:3,name:"CSS",color:"css-blue",icon:<FaCss3/>}],description:"A stylish notifications alert modal that elevates user experience to new heights. With meticulously crafted design elements and captivating animations, it seamlessly integrates into any interface, commanding attention when needed. Embracing the essence of realism, mock skeleton loaders simulate server calls, ensuring a smooth and immersive interaction that keeps users engaged.",img:notificationsImg,site:"https://jgreen721.github.io/frontend_challenges/notificationAppRedo/",preAnimatedClass:"offset-right",animatedClassName:"slide-left"}
  // ]
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
          if(tech == "React"){
            formatedTechnology.push({id:formatedTechnology.length+1,name:tech,color:"react-blue",icon:<FaReact/>})

          }
          if(tech == "Vue"){
            formatedTechnology.push({id:formatedTechnology.length+1,name:tech,color:"vue-green",icon:<FaVuejs/>})

          }
        })
        // return {...sample,technology:formatedTechnology}
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