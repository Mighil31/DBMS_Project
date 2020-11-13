import React from 'react'
import { useState } from 'react'
import '../components/css/departmentClerk.css'  
const SalesClerkInfo = () => {

    const [ showCustDetails , setShowCustDetails ] = useState(false);

    return (
        <div className='DC'>
            <header>
                <nav
                class="SpNav"
                >
                    <a href="./departmentClerkLanding.html" class="Home">DropTable</a>
                    <section>
                        <a href="#" class="Det">Details</a>
                        <a href="../signin/signin.html" class="Sout">Sign out</a>
                    </section>
                </nav>  
            </header>
            <section class="Toggle">
                <button onClick={() => setShowCustDetails(false)} class="Order ">Orders</button>
                <button onClick={() => setShowCustDetails(true)} class="Customer Active">Customers</button>
            </section>
                <button data-aos="fade-right" class="Refresh">Refresh</button>
    
            <div 
                class="Clerk-Customer"
                style={{display: showCustDetails ? 'inherit' : 'none' }}
            >
                <h1>
                    Welcome clerk,now you are looking at customer details.
                </h1>
                <div class="Customer-details">
                </div>
            </div>
            <div 
                class="Clerk-Orders OffScreen"
                style={{display: showCustDetails ? 'none' : 'inherit' }}
            >
                <h1>
                    Welcome clerk,now you are looking at Order details.
                </h1>
                <div class="Order-details">

                </div>
            </div>
        </div>
    )
}

export default SalesClerkInfo
