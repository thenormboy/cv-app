import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import General from './General.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <div className='form-container'>
        <General />
      </div>
    </div>
  </React.StrictMode>,
)
