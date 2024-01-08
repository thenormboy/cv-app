export default function Resume({generalInfo, experienceInfo, educationInfo}) {

    return (
        <>
        <div className='resume-container'>
            <div className="resume-header">
                <div className="resume-name">{ generalInfo.getName() }</div>
                <div className="resume-contact">
                    <div>{generalInfo.getEmail()}</div>
                    <div>{generalInfo.getPhone()}</div>
                    <div>{generalInfo.getAddress()}</div>
                </div>
            </div>
            <div className="resume-experience">
                <h3>Employment History</h3>
                {experienceInfo.map((info, index) => {
                    return (
                        <ResumeExperience key={index} employmentCell={info}/>
                    )
                })}
            </div>
            <div className="resume-education">
                <h3>Education</h3>
                {educationInfo.map((info, index) => {
                    return (
                        <ResumeEducation key={index} schoolCell={info} />
                    )
                })}
            </div>
        </div>
        </>
    )
}

function ResumeExperience({employmentCell}) {
    return (
        <>
        <div className="employment-cell">
            <div className="employment-date">{employmentCell.getStart()} - {employmentCell.getEnd()}</div>
            <div className="employment-description">
                <div className="employment-title">{employmentCell.getTitle()}, {employmentCell.getName()}</div>
                <div>{employmentCell.getDescription()}</div>
            </div>
            <div className="employment-location">{employmentCell.getLocation()}</div>
        </div>
        </>
    )
}

function ResumeEducation({schoolCell}) {
    return (
        <>
        <div className="school-cell">
            <div className="school-date">{schoolCell.getStart()} - {schoolCell.getEnd()}</div>
            <div className="school-title">{schoolCell.getDegree()}, {schoolCell.getName()}</div>
            <div className="school-location">{schoolCell.getLocation()}</div>
        </div>
        </>
    )
}