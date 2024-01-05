import { useState } from "react";
import { experienceItem } from "./objects";

export default function Experience({experienceItemArray}) {

    const [components, setComponents] = useState(experienceItemArray)

    function onButtonClick() {
        experienceItemArray.push(experienceItem())
        setComponents([...components])
    }

    return (
        <>
        <div className="general-container">
            <h2>
                Experience
            </h2>
            <div className="input-container">
                {experienceItemArray.map((info) => {
                    return <ListEducation key={info.getName()} experienceInfo={info} />
                })}
            </div>
            <button onClick={onButtonClick}>Add Company</button>
        </div>
        </>
    )
}

function ListEducation(experienceInfo) {

    const [companyName, setCompanyName] = useState()
    const [jobTitle, setJobTitle] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [location, setLocation] = useState()
    const [descriptopn, setDescription] = useState()

    return (
        <>
        <label htmlFor='company-name'>Name of Company</label>
        <input type="text" id="company-name" placeholder="Example Inc." 
            onChange={(e) => {
                setCompanyName(e.target.value);
                experienceInfo.setName(e.target.value)
                }
            }    
        /> 
        <label htmlFor='job-title'>Job Title</label>
        <input type="text" id="job-title" placeholder="Job Title" 
            onChange={(e) => {
                setJobTitle(e.target.value);
                experienceInfo.setTitle(e.target.value)
                }
            }    
        />
        <div className="date-section">
            <div>
                <label htmlFor='start-date'>Start Date</label>
                <input type="text" id="start-date" placeholder="Month/Yr" 
                    onChange={(e) => {
                        setStartDate(e.target.value);
                        experienceInfo.setStart(e.target.value)
                        }
                    }    
                />  
            </div>
            <div>
                <label htmlFor='end-date'>End Date</label>
                <input type="text" id="end-date" placeholder="Month/Yr" 
                    onChange={(e) => {
                        setEndDate(e.target.value);
                        experienceInfo.setEnd(e.target.value)
                        }
                    }    
                />
            </div>
        </div>
        <label htmlFor='location'>Location</label>
        <input type="text" id="location" placeholder="City, Province" 
            onChange={(e) => {
                setLocation(e.target.value);
                experienceInfo.setLocation(e.target.value)
                }
            }    
        />
        <label htmlFor='description'>Role Description</label>
        <textarea type="text" rows='6' id="description" placeholder="Describe your role" 
            onChange={(e) => {
                setDescription(e.target.value);
                experienceInfo.setDescription(e.target.value)
                }
            }    
        />    
        </>
    )
}






