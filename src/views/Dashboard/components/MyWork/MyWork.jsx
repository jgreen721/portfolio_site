import React, {useState} from 'react'
import { dataStorageImg, frontendQuizImg,planetsInfoImg,notificationsImg } from '../../../../const'
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { FaVuejs,FaReact  } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import "./MyWork.css";
import { SampleItem } from './components';





const MyWork = ({handleSiteView}) => {
  const samples = [
    {id:1,name:"Data-Storage Design",technology:[{id:1,name:"JS",color:"js-yellow",icon:<RiJavascriptLine/>},{id:2,name:"HTML",color:"html-orange",icon:<AiOutlineHtml5/>},{id:3,name:"CSS",color:"css-blue",icon:<FaCss3/>}],blurb:"This data storage UI sample boasts pleasing CSS and SVG animations, enhancing user engagement. Mock skeleton loaders reduce wait times, maintaining a seamless experience.",img:dataStorageImg,link:"https://jgreen721.github.io/frontend_challenges/fylodatastorage_redo/"},
    {id:2,name:"Frontend Quiz",technology:[{id:1,name:"React",color:"react-blue",icon:<FaReact/>}],blurb:"Dive into interactive learning with this frontend quiz app. Combining HTML, CSS, and JavaScript, it offers engaging quizzes with pleasing animations. Track your progress in real-time as you answer questions, creating a personalized learning experience.",img:frontendQuizImg,link:"https://fe-quiz.vercel.app/"},
    {id:3,name:"Planets Info",technology:[{id:1,name:"Vue",color:"vue-green",icon:<FaVuejs/>}],blurb:"Embark on a cosmic adventure with this Vue-powered planets info app. Leveraging Vue's store and features, it offers seamless data retrieval and stunning visuals. Explore rich information about each planet in a captivating, immersive experience.",img:planetsInfoImg,link:"https://planetsapp-vue.vercel.app/"},
    {id:4,name:"Notifications Sample",technology:[{id:1,name:"JS",color:"js-yellow",icon:<RiJavascriptLine/>},{id:2,name:"HTML",color:"html-orange",icon:<AiOutlineHtml5/>},{id:3,name:"CSS",color:"css-blue",icon:<FaCss3/>}],blurb:"A stylish notifications alert modal that elevates user experience to new heights. With meticulously crafted design elements and captivating animations, it seamlessly integrates into any interface, commanding attention when needed. Embracing the essence of realism, mock skeleton loaders simulate server calls, ensuring a smooth and immersive interaction that keeps users engaged.",img:notificationsImg,link:"https://jgreen721.github.io/frontend_challenges/notificationAppRedo/"}
  ]

  return (
    <div className="mywork-container">
      <h1>My Work</h1>
      <ul className="samples">
      {samples.map(sample=>(
<SampleItem handleSiteView={handleSiteView} key={sample.id} sample={sample}/>
      ))}
      </ul>
    </div>
  )
}

export default MyWork