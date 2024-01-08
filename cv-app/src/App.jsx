import { useState } from 'react'
import General from './General.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Resume from './Resume.jsx'

import { generalItem } from './objects.js'
import { experienceItem } from './objects.js'
import { educationItem } from './objects.js'
import './index.css'

let basicInfo = generalItem('Example Name','example@email.com','(123) 456-7890','City, Province')

let works = []

works.push(experienceItem('Example Inc.', 'Janitor', 'Feb/2023', 'Mar/2024', 'Raleigh, NC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'))

let schools = [];

schools.push(educationItem('Example University', 'Example Degree', 'mo/year', 'mo/year', 'Whoville, NA'));

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
        <Experience experienceItemArray={works}/>
        <Education educationItemArray={schools}/>
        <button onClick={onButtonClick(renderState)}
        >Submit</button>
      </div>
      <div>
        <Resume generalInfo={renderState} experienceInfo={works}/>
      </div>
    </div>
  )
}

export default App
