import React from 'react'
import './css/departmentClerk.css';

const SalesClerkComp = () => {
    return (
        <div className='DC'>
            <header>
                <nav 
                data-aos="fade-down"
                data-aos-easing="ease-out"
                className="SpNav" >
                    <a href="#" className="Home">DropTable</a>
                    <section>
                        <a href="./departmentClerkInfo.html" className="Det">Details</a>
                        <a href="../signin/signin.html" className="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
    
            <div className="Landing">
                <h1 className="Hero">
                    Welcome back sales clerk
                </h1>
                <section
                data-aos="zoom-out"
                className="Scroll">
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
                    <a href="#" className="Update">Update</a>
                        <form action="" className="UpdateInfo" id="Form">
                            <button className="Close"></button>
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
