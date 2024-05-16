import React, {useEffect} from 'react'
import { Header,MyWork,Services,Testimonials,About,FAQ } from './components'
import "./Dashboard.css"

const Dashboard = () => {




  return (
    <div className="dashboard-container">
      {/* <div className="dashboard-container-content"> */}
      <Header/>
      <Services/>
      <MyWork/>
      <Testimonials/> 
      <About/>
      <FAQ/>
      {/* </div> */}
    </div>
  )
}

export default Dashboard