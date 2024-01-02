import { useState } from "react"

export default function General({generalInfo}) {

    const [inputName, setInputName] = useState()
    const [inputEmail, setInputEmail] = useState()

    return (
        <>
        <form className="general-container">
            <h2>General Info</h2>
            <div className="input-container">
                <label htmlFor='full-name'>Last Name</label>
                <input type="text" id="full-name" placeholder="First and Last Name" 
                    onChange={(e) => {
                        setInputName(e.target.value);
                        generalInfo.setName(e.target.value)
                        }
                    }    
                />  
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="example@email.com" 
                    onChange={(e) => {
                        setInputName(e.target.value);
                        generalInfo.setName(e.target.value)
                        }
                    } 
                />  
                <label htmlFor="phone-number">Phone Number</label>
                <input type="text" id="phone-number" placeholder="(123) 456-7890" />   
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="City, Province" />   
            </div>
        </form>
        </>
    )
}
