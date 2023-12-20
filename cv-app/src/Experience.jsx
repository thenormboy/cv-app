const experienceItem = (name, title, start, end, location, description) => {
    const getName = () => name;
    const getTitle = () => title;
    const getStart = () => start;
    const getEnd = () => end;
    const getLocation = () => location;
    const getDescription = () => description

    const setName = (newName) => {
        name = newName
    }

    const setTitle = (newTitle) => {
        title = newTitle
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

    const setDescription = (newDescription) => {
        description = newDescription
    }

    return {
        getName,
        getTitle,
        getStart,
        getEnd,
        getLocation,
        getDescription,
        setName,
        setTitle,
        setStart,
        setEnd,
        setLocation,
        setDescription
    }
}

export default function Experience() {

    let works = [];

    works.push(experienceItem('Example Inc', 'Example Title', 'mo/year', 'present', 'Whoville, NA', 'big description'));

    function displayWorks(){

    }

    return (
        <>
        <div className="general-container">
            <button className="experience-button" type="button" onClick={displayWorks}>
                <h2>Experience</h2>
                <div>V</div>
            </button>
            <div>
                
            </div>
        </div>
        </>
    )
}

function ListEducation(props) {
    return <button>{props.work}</button>
}

function List(props) {
    return (
        <div>
            {props.works.map((work) => {
                return <ListEducation key={work} work={work} />
            })}
        </div>
    )
}





