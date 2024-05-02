import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import { AppProvider } from './context/AppContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
)



// build a store
// viewSite boolean
// toggle the glassy overlay from dashboard and siteview from samples component
