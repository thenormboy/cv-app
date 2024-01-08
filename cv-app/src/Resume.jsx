export default function Resume({generalInfo, experienceInfo}) {

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
            <div className="resume-education"></div>
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