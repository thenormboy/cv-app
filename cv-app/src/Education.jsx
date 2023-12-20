const educationItem = (name, degree, start, end, location) => {
    const getName = () => name;
    const getDegree = () => degree;
    const getStart = () => start;
    const getEnd = () => end;
    const getLocation = () => location;

    const setName = (newName) => {
        name = newName
    }

    const setDegree = (newDegree) => {
        degree = newDegree
    }

    const setStart = (newStart) => {
        start = newStart
    }

    const setEnd = (newEnd) => {
        end = newEnd
    }

    const setLocation = (newLocation) => {
        location =newLocation
    }

    return {
        getName,
        getDegree,
        getStart,
        getEnd,
        getLocation,
        setName,
        setDegree,
        setStart,
        setEnd,
        setLocation
    }
}

export default function Education() {

    let schools = [];

    schools.push(educationItem('Example University', 'Example Degree', 'mo/year', 'mo/year', 'Whoville, NA'));

    function displaySchools(){

    }

    return (
        <>
        <div className="general-container">
            <button className="education-button" type="button" onClick={displaySchools}>
                <h2>Education</h2>
                <div>V</div>
            </button>
            <div>
                
            </div>
        </div>
        </>
    )
}

function ListEducation(props) {
    return <button>{props.school}</button>
}

function List(props) {
    return (
        <div>
            {props.schools.map((school) => {
                return <ListEducation key={school} school={school} />
            })}
        </div>
    )
}





