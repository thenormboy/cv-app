const generalItem = (name, email, phone, address) => {
    const getName = () => name;
    const getEmail = () => email;
    const getPhone = () => phone;
    const getAddress = () => address;

    const setName = (newName) => {
        name = newName
    }

    const setEmail = (newEmail) => {
        email = newEmail
    }

    const setPhone = (newPhone) => {
        phone = newPhone
    }

    const setAddress = (newAddress) => {
        address = newAddress
    }

    return {
        getName,
        getEmail,
        getPhone,
        getAddress,
        setName,
        setEmail,
        setPhone,
        setAddress
    }
}

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

export {
    generalItem,
    experienceItem
}