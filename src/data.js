import { faqCard,nftCard,perfumeAd,pomodoroImg,resultsCard,makerPrelaunch,notificationsRedo,spaceApp, dictionary,multistepForm,notifications,pwordGenerator,rpsSite,bodyMass,clockSite,portfolio,quiz,taskManager,movieSite,speakerSite, rateUsCard, ccInput } from './const'



export const data = [
    {
      id:1,
      level:"Newbie",
      description:"Getting your feet wet with HTML, CSS and a bit of Javascript in building small single components.",
      samples:[
        {id:1,title:"FAQ-Card",description:"A spruced up faq card with drop-down behavior, a running carousel and staggered intro animation for an enhanced UX.",technology:["HTML","CSS","ThreeJS","React","Blender"],img:faqCard,site:"https://frontend3dsolution.vercel.app/",code:"https://github.com/jgreen721/frontend3dsolution"},
        {id:2,title:"NFT-Card",description:"A centered NFT card with hover effects.",technology:["HTML","CSS"],img:nftCard,site:"https://jgreen721.github.io/frontend_challenges/nftfigma/",code:"https://github.com/jgreen721/frontend_challenges/tree/master/nftfigma"},
        {id:3,title:"Perfume Ad",description:"An animated perfume-ad card with staggered animation, as well as a 3d solution with custom gltf models and a camera panning intro.",technology:["ThreeJS","React","Blender"],img:perfumeAd,site:"https://perfume3d.vercel.app/",code:"https://github.com/jgreen721/perfume3d"},
        {id:4,title:"Survey Card",description:"A results summary card with theme-toggles and JS that measures the spoofed data and determine to invoke confetti via 3rd party lib",technology:["HTML","CSS","JS"],img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/",code:"https://github.com/jgreen721/frontend_challenges/tree/master/results_summary"},
        {id:5,title:"Service-rating Modal",description:"Enhance your site's user experience with this animated, responive Rate-Us Modal. Ensure valuable feedback in style.",technology:["HTML","CSS","JS"],img:rateUsCard,site:"https://jgreen721.github.io/frontend_challenges/ratingcard_figmaanimate_fec/"},

      ]
    },
    {
      id:2,
      level:"Beginner",
      description:"Building out small sites and applying responsive positioning to page elements.",
      samples:[
        {id:7,title:"Maker Prelaunch",description:"Sleek and responsive sectional scrolling landing page using vanilla JavaScript, CSS, and the Intersection Observer API, optimizing UX with animating sections as they come into the users viewport.",technology:["HTML","CSS","JS"],img:makerPrelaunch,site:"https://jgreen721.github.io/frontend_challenges/maker-prelaunch/"},
        {id:8,title:"MultistepForm",description:"Multisteps form with persistence data allowing users to change answers at any stage of the form.",technology:["HTML","CSS","JS"],img:multistepForm,site:"https://do-multistepform-dcdfuwwgc-jgreen721.vercel.app/"},
        {id:9,title:"Notifications Snippet",description:"Elevate your user experience with our sleek notification snippet crafted in JavaScript. This minimalist yet powerful feature keeps users informed in real-time, ensuring a seamless and engaging interaction with your application.",technology:["HTML","CSS","JS"],img:notifications,site:"https://jgreen721.github.io/frontend_challenges/notificationsapp/"},
        {id:10,title:"Password Generator",description:"Embark on a secure digital journey with our stylish JavaScript password generator. This user-friendly app effortlessly creates strong passwords, bridging the gap between accessibility and heightened online security in today's cyber landscape.",technology:["HTML","CSS","JS"],img:pwordGenerator,site:"https://jgreen721.github.io/frontend_challenges/passwd_gen/"},
        {id:11,title:"CC Input",description:"Elevate your payment process with this styled CC-input forms complete with input validation.",technology:["HTML","CSS","JS"],img:ccInput,site:"https://jgreen721.github.io/frontend_challenges/carddetails/index.html"},
        {id:12,title:"Styled Notification",description:"Sharpening design skills with a redone snippet of notifications modal.",technology:["HTML","CSS","JS"],img:notificationsRedo,site:"https://jgreen721.github.io/frontend_challenges/notificationAppRedo"},
      ]
    },
    {
      id:3,
      level:"Junior",
      description:"Continuing on with more advanced designs and deeper functionality",
      samples:[
        {id:13,title:"Body Mass Calculator",description:"Experience versatility with our Body Mass Calculator, ingeniously designed to compute your body mass in both pounds and kilograms. This user-friendly tool provides a holistic perspective on fitness, allowing you to effortlessly toggle between units, promoting a well-rounded approach to health monitoring and goal setting.",technology:["HTML","CSS","React"],img:bodyMass,site:"https://frontend3dsolution.vercel.app/"},
        {id:14,title:"Clock UI",description:"Dynamic Clock Application: Expertly crafted clock interface with seamless light/dark mode transitions. Integrated with a Quotes API, allowing users to click for instant inspiration, making time-checks a motivational experience.",technology:["HTML","CSS","JS"],img:clockSite,site:"https://clockapp-react.vercel.app/"},
        {id:15,title:"Portfolio Demo",description:"Elevate your professional image with a meticulously designed portfolio that captivates prospective clients. This sleek and modern layout showcases your work in a visually compelling manner, leaving a lasting impression that speaks volumes about your skills and expertise.",technology:["HTML","CSS","JS"],img:portfolio,site:"https://portfolio-challenge-three.vercel.app/"},
        {id:16,title:"Programming Quiz",description:"Seamlessly blending React logic with aesthetically pleasing design, my quiz application offers three engaging quizzes in HTML, CSS, and JS. Elevate user experience with dynamic question handling and real-time feedback, showcasing my proficiency in creating captivating and educational web applications.",technology:["React","CSS"],img:quiz,site:"https://fe-quiz.vercel.app/"},
        {id:17,title:"Dictionary UI",description:"This dictionary application, crafted with vanilla JS seamlessly integrates with a powerful api, immersing the user in a rich linguistic experience with authentic dictionary styling, complete with enunciations. User customization is at its core, featuring font and theme-mode toggles for a personalized and comfortable exploration of language.",technology:["HTML","CSS","JS"],img:dictionary,site:"https://jgreen721.github.io/frontend_challenges/dictionaryapp"},
        {id:18,title:"Planets-Info App",description:"A Vue.js planets-info app that seamlessly employs Vue's store for streamlined data distribution, effecting the UI for an enhanced and pleasing UX.",technology:["Vue"],img:spaceApp,site:"https://planetsapp-vue.vercel.app/",translate:420,borderRadius:"54% 36% 21% 59% / 82% 91% 34% 62%"},

      ]
    },
    {
      id:4,
      level:"Senior",
      description:"Fully functional sites ready for a backend server and to go into production.",
      samples:[
        {id:19,title:"Movie Site",description:"A captivating React-powered movie site designed for frontend brilliance. Featuring a seamlessly navigable dashboard reminiscent of Netflix, complete with dynamic category filtering and local storage capabilities for user-generated favorites. This project serves as a frontend demonstration, offering a visually stunning showcase with login bypass convenience, although security measures are simulated for frontend purposes.",technology:["HTML","CSS","React"],img:movieSite,site:"https://fe-entertainmentwebapp.vercel.app/"},
        {id:20,title:"Task Manager",description:"Engineered with React, this task management site redefines organization and collaboration. Users can seamlessly add, comment, and track tasks through various stages, each with its distinct status. Elevating user engagement, a 'likes' system encourages positive interaction, making this React-based project a comprehensive and user-friendly solution for effective task management.",technology:["HTML","Tailwind","React"],img:taskManager,site:"https://react-feedbackmanager.vercel.app/add"},
        {id:21,title:"SpeakerSite",description:"This dynamic speaker/audio retail site delivers a visually captivating frontend experience. Users can seamlessly navigate through multiple views, explore a rich catalogue with category filters, access detailed product information, and manage their selections with a user-friendly cart. While the checkout system is simulated for frontend purposes, this project showcases a visually striking and functionally robust audio retail platform.",technology:["React"],img:speakerSite,site:"https://audiophile-site-eight.vercel.app/"},
        {id:22,title:"Pomodoro Timer",description:"Dynamic React-based Pomodoro Timer offering personalized productivity sessions. Tailor your work intervals, breaks, and visual experience with customizable timer durations, UI color schemes, and fonts, ensuring a personalized and focused workflow.",technology:["React"],img:pomodoroImg,site:"https://jgreen721.github.io/pomodorotimer"},
        // {id:5,translateId:4,title:"Survey Card",description:"",technology:["HTML","CSS","JS"],img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/",translate:210},
      ]
    },
  ]