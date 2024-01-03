import { useState } from 'react'
import General from './General.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Resume from './Resume.jsx'

import { generalItem } from './objects.js'
import './index.css'

let basicInfo = generalItem('Example Name','example@email.com','(123) 456-7890','City, Province')

function App() {

  const [renderState, setRenderState] = useState(basicInfo)
  const [fullName, setFullName] = useState(basicInfo.getName())
  const [email, setEmail] = useState(basicInfo.getEmail())
  const [phone, setPhone] = useState(basicInfo.getPhone())
  const [address, setAddress] = useState(basicInfo.getAddress())

  const onButtonClick = (info) => () => {
    setFullName(info.getName())
    setEmail(info.getEmail())
    setPhone(info.getPhone())
    setAddress(info.getAddress())
    setRenderState(info)
  }

  return (
    <div className='container'>
      <div className='form-container'>
        <General generalInfo={renderState}/>
        <Experience />
        <Education />
        <button onClick={onButtonClick(renderState)}
        >Submit</button>
      </div>
      <div>
        <Resume generalInfo={renderState}/>
      </div>
    </div>
  )
}

export default App
