import { Navbar,SiteView,Footer } from './components'
import {Routes, Route} from "react-router-dom"
import {Dashboard, Portfolio,Contact} from "./views"
import './App.css'

function App() {

  return (
    <div data-theme="dark" className="app">
      <div className="app-content">
     <Navbar/>
    <SiteView/>
     <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  
    <Footer/> 
    </div>
    </div>
  )
}

export default App