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

export {
    generalItem
}