import { useEffect, useState } from 'react'
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

let allInfo = [basicInfo, works, schools]

function App() {

  let allInfoUpdated = []

  const [reload, setReload] = useState(true)
  const [elements, setElements] = useState(allInfo)

  useEffect(() => {
    if (reload) {
      allInfoUpdated = allInfo
      setElements(allInfoUpdated)
    }
    setReload(false);
  }, [elements, reload]);

  return (
    <div className='container'>
      <div className='form-container'>
        <General generalInfo={elements[0]}/>
        <Experience experienceItemArray={elements[1]}/>
        <Education educationItemArray={elements[2]}/>
        <button className='submit-button' onClick={() => {setReload(true); }}
        >Submit</button>
      </div>
      <div>
        <Resume generalInfo={elements[0]} experienceInfo={elements[1]} educationInfo={elements[2]}/>
      </div>
    </div>
  )
}

export default App
