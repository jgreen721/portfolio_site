import React,{ useState, createContext, useContext, useEffect } from "react";
import data  from "../serialized_data"
import { fetch_all_samples_from_firebase,fetch_all_comments_from_firebase } from "../helpers/fetch_firebase_samples";
import { update_comments, update_reactions } from "../helpers/update_firebase";

const AppContext = createContext();



export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [siteView, setSiteView] = useState(false);
  const [showMobile,setShowMobile] = useState(false);
  const [site,setSite] = useState(null);
  const [allSamples, setAllSamples] = useState([]);
  const [categorySections,setCategorySections] = useState(data.categories)
  const [faqitems,setFaqItems] = useState([]);
  const [testimonials,setTestimonials] = useState([]);
  const [comments,setComments] = useState([])
  const [updateReaction,setUpdateReaction] = useState(null)



  useEffect(()=>{

    const serializeData = async()=>{
      // console.log('serializeData fired!')
      let firebaseData = []
      let firebaseComments = []
          firebaseData = await fetch_all_samples_from_firebase();
          firebaseComments = await fetch_all_comments_from_firebase();
      // console.log("hydrating data -- fetching to firebase")
      // console.lopg(firebaseData)
      
      if(firebaseData?.length > 0){
        //firebase is online
        data.samples = data.samples.map(s=>{
          let databaseSample = firebaseData.find(firebaseItem=>firebaseItem.sampleId == s.id);
          if(databaseSample == undefined){
          console.log("undefined stuffs!",databaseSample,s);
          }
          let filteredComments = firebaseComments.filter(f=>f.sampleId == s.id)
          return {...s,likes:databaseSample.likes,dislikes:databaseSample.dislikes,love:databaseSample.love,comments:filteredComments.length,showComments:false}
          // return s
        })
      
     }
      else{
        // firebase offline
        data.samples = data.samples.map(s=>({...s,likes:0,dislikes:0,love:0,comments:0,showComments:false}));
     
      }
      setAllSamples(data.samples)
      setComments(firebaseComments)
    }
    serializeData();
  },[])




  // populate/handle testimonials and faqs
useEffect(()=>{
    async function fetchData(url){
      let response = await fetch(url);
      let {data} = await response.json();
      return data;
    }

   async function fetchDataAndUpdateState() {
      const faqData = await fetchData("./faq.json")
      const testimonialData = await fetchData("./testimonial.json")
      setFaqItems(faqData);
      setTestimonials(testimonialData);
    }
     fetchDataAndUpdateState();
    
  },[]);


  useEffect(()=>{
    // update has been made, refactor to reflect without disturbing Firebase
    if(!updateReaction)return;
  //  console.log("comments",comments)
  //  console.log(updateReaction)
   let tempSamples = allSamples;
   if(updateReaction?.action != "comments"){
     console.log("updating " + updateReaction.action + " value on sample " + updateReaction.sampleId + " to " + updateReaction.newValue + " .") 
     let action = updateReaction.action;
     tempSamples = tempSamples.map(s=>s.id == updateReaction.sampleId ? ({...s,[action]:updateReaction.newValue}) : s)
   }
   else{
     tempSamples = tempSamples.map(s=>s.id == updateReaction.sampleId ? ({...s,comments:s.comments+1}) : s)

   }
  //  console.log("TEMPSAMPLES",tempSamples)
   setAllSamples(tempSamples)


  },[updateReaction])

  const toggleMobileMenu = ()=>{
    setShowMobile((showMobile)=>showMobile = !showMobile);
  }

  const handleSiteView = (site)=>{
    if(siteView){
      setSiteView(false);
      setSite(null);
      return;
    }
    setSiteView(true);
    setSite(site)
    // console.log("Site",site);
  }


  const toggleCommentsOnSample=(sample)=>{
    console.log("Toggling comments for sample "  +  sample.title)
     setAllSamples(allSamples=>allSamples = allSamples.map(s=>s.id == sample.id ? {...s,showComments:!s.showComments} : {...s,showComments:false}));
       
  }


  const handleReactToSample=async(id,action)=>{
    console.log(id,action)
    try{
      let response = await update_reactions(action,id);
          setUpdateReaction({sampleId:id,action,newValue:response.newValue})  
          return {status:response.status}
      }
    catch(e){
      console.log("Error with upating reaction to worksample",e)
      return {status:500}
    }
  }



  const addComment = async(commentObj)=>{

    try{
      let {status} = await update_comments(commentObj);
        console.log("successful comment entry!")
        setComments((comments)=>[...comments,commentObj])
        setUpdateReaction({sampleId:commentObj.sampleId,action:'comments',newValue:null})
        return {status}
      }
    catch(e){
        console.log("Error in adding comment.");
        return {status:500}
    }

  }



  const values = {
    siteView,
    showMobile,
    site,
    faqitems,
    testimonials,
    allSamples,
    categorySections,
    comments,
    handleSiteView,
    toggleMobileMenu,
    handleReactToSample,
    toggleCommentsOnSample,
    addComment,

  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
