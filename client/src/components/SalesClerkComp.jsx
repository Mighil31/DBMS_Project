import React, { useRef } from 'react'
import { useState } from 'react';
import './css/departmentClerk.css';

const SalesClerkComp = () => {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = (e) => {
        e.preventDefault();

        if(showForm)
            setShowForm(false)
        else
            setShowForm(true)
    }

    return (
        <div className='DC'>
            <header>
                <nav 
    
                className="SpNav" >
                    <a className="Home">DropTable</a>
                    <section>
                        <a  className="Det">Details</a>
                        <a className="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
    
            <div className="Landing">
                <h1 className="Hero">
                    Welcome back sales clerk
                </h1>
                <section
                data-aos="zoom-out"
                className="Scroll"
                // ref={scroll}
                >
                    <img src={require("./media/icons/scroll-down.jpg")} />
                </section>
            </div>
            <div className="Details">
                <div className="Personal">
                    <h2>Your personal details</h2>
                    <section>
                        <p id="Name"><span className="Label">Name:</span><span className="Value">Richard Malkov</span></p>
                        <p id="Email"><span className="Label">Email:</span><span className="Value">richardmalkov@hotmail.com</span></p>
                        <p id="Address"><span className="Label">Address:</span><span className="Value">No 52/1, Rajaram street, KK nagar,Delhi-07.</span></p>
                    </section>
                    <a onClick={e => toggleForm(e)} className="Update">Update</a>
                        <form 
                            action=""  
                            className="UpdateInfo" 
                            id="Form"
                            style={{display: showForm ? 'inherit' : 'none' }}
                            >
                            <button onClick={e => toggleForm(e)} className="Close"></button>
                            <input type="text" name="Name" value="" placeholder="name" /><br/>
                            <input type="email" name="Email" value="" placeholder="email" /><br/>
                            <input type="text" name="Address" value="" placeholder="address" /><br/>
                            <button type="submit" className="Submit">Update</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default SalesClerkComp
