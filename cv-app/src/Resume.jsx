import { useState } from "react"

export default function Resume({generalInfo}) {

    console.log(generalInfo.getName())

    return (
        <>
        <div className='resume-container'>
            <div className="resume-header">
                <div className="resume-name">{ generalInfo.getName() }</div>
                <div className="resume-contact"></div>
            </div>
            <div className="resume-experience"></div>
            <div className="resume-education"></div>
        </div>
        </>
    )
}