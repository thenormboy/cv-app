import { useState } from "react";
import { educationItem } from "./objects.js";

export default function Education({educationItemArray}) {

    const [components, setComponents] = useState(educationItemArray)

    function onButtonClick() {
        educationItemArray.push(educationItem())
        setComponents([...components])
    }

    return (
        <>
        <div className="general-container">
            <h2>
                Education
            </h2>
            <div className="experience-input">
                {educationItemArray.map((info, index) => {
                    return <ListEducation key={index} educationInfo={info} />
                })}
            </div>
            <button onClick={onButtonClick}>Add School</button>
        </div>
        </>
    )
}

function ListEducation(educationInfo) {
    const [schoolName, setSchoolName] = useState()
    const [degreeTitle, setDegreeTitle] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [location, setLocation] = useState()

    return (
        <>
        <div className="input-section">
            <label htmlFor='school-name'>Name of School</label>
            <input type="text" id="school-name" placeholder="Example School" 
                onChange={(e) => {
                    setSchoolName(e.target.value);
                    educationInfo.setName(e.target.value)
                    }
                }    
            /> 
            <label htmlFor='degree-title'>Degree</label>
            <input type="text" id="degree-title" placeholder="Degree Title" 
                onChange={(e) => {
                    setDegreeTitle(e.target.value);
                    educationInfo.setTitle(e.target.value)
                    }
                }    
            />
            <div className="date-section">
                <div>
                    <label htmlFor='start-date'>Start Date</label>
                    <input type="text" id="start-date" placeholder="Month/Yr" 
                        onChange={(e) => {
                            setStartDate(e.target.value);
                            educationInfo.setStart(e.target.value)
                            }
                        }    
                    />  
                </div>
                <div>
                    <label htmlFor='end-date'>End Date</label>
                    <input type="text" id="end-date" placeholder="Month/Yr" 
                        onChange={(e) => {
                            setEndDate(e.target.value);
                            educationInfo.setEnd(e.target.value)
                            }
                        }    
                    />
                </div>
            </div>
            <label htmlFor='location'>Location</label>
            <input type="text" id="location" placeholder="City, Province" 
                onChange={(e) => {
                    setLocation(e.target.value);
                    educationInfo.setLocation(e.target.value)
                    }
                }    
            />
        </div>    
        </>
    )
}





