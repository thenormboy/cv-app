export default function General() {
    return (
        <>
        <form className="general-container">
            <h2>General Info</h2>
            <div className="input-container">
                <label htmlFor='full-name'>Last Name</label>
                <input type="text" id="full-name" placeholder="First and Last Name" />  
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="example@email.com" />  
                <label htmlFor="phone-number">Phone Number</label>
                <input type="text" id="phone-number" placeholder="(123) 456-7890" />   
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="City, Province" />   
            </div>
        </form>
        </>
    )
}
