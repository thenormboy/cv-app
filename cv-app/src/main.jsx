import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import General from './General.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <div className='form-container'>
        <General />
        <Education />
        <Experience />
      </div>
      <div className='resume-container'>

      </div>
    </div>
  </React.StrictMode>,
)
