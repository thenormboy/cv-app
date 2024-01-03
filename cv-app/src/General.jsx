import { useState } from "react"

export default function General({generalInfo}) {

    const [inputName, setInputName] = useState()
    const [inputEmail, setInputEmail] = useState()
    const [inputPhone, setInputPhone] = useState()
    const [inputAddress, setInputAddress] = useState()

    return (
        <>
        <form className="general-container">
            <h2>General Info</h2>
            <div className="input-container">
                <label htmlFor='full-name'>Full Name</label>
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
                        setInputEmail(e.target.value);
                        generalInfo.setEmail(e.target.value)
                        }
                    } 
                />  
                <label htmlFor="phone-number">Phone Number</label>
                <input type="text" id="phone-number" placeholder="(123) 456-7890" 
                     onChange={(e) => {
                        setInputPhone(e.target.value);
                        generalInfo.setPhone(e.target.value)
                        }
                    }               
                />   
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="City, Province" 
                    onChange={(e) => {
                        setInputAddress(e.target.value);
                        generalInfo.setAddress(e.target.value)
                        }
                    }
                />   
            </div>
        </form>
        </>
    )
}
