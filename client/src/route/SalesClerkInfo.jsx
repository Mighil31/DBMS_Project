import React from 'react'

const SalesClerkInfo = () => {
    return (
        <div>
            <header>
                <nav
                data-aos="fade-down"
                data-aos-easing="ease-out"
                class="SpNav">
                    <a href="./departmentClerkLanding.html" class="Home">DropTable</a>
                    <section>
                        <a href="#" class="Det">Details</a>
                        <a href="../signin/signin.html" class="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
            <section
            class="Toggle">
                <button class="Order ">Orders</button>
                <button class="Customer Active">Customers</button>
            </section>
                <button 
                data-aos="fade-right"
                class="Refresh">Refresh</button>
    
    <div class="Clerk-Customer">
    <h1>
        Welcome clerk,now you are looking at customer details.
    </h1>
    

    <div class="Customer-details">
       

    </div>
    </div>
    <div class="Clerk-Orders OffScreen">
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
