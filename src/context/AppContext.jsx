import React,{ useState, createContext, useContext, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [siteView, setSiteView] = useState(false);
  const [showMobile,setShowMobile] = useState(false);
  const [site,setSite] = useState(null);
  const [faqitems,setFaqItems] = useState([]);
  const [testimonials,setTestimonials] = useState([]);


  useEffect(()=>{
    async function fetchData(url){
      let response = await fetch(url);
      let {data} = await response.json();
      // console.log("response",data);
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

  const toggleMobileMenu = ()=>{
    console.log('toggleMobileMenu fired!')
    setShowMobile((showMobile)=>showMobile = !showMobile);
  }

  const handleSiteView = (site={})=>{
    console.log('handleSiteView fired!')
    if(siteView){
      setSiteView(false);
      setSite(null);
      return;
    }
    setSiteView(true);
    setSite(site)
    console.log("Site",site);
  }

  const values = {
    siteView,
    site,
    faqitems,
    testimonials,
    showMobile,
    handleSiteView,
    toggleMobileMenu,

  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
