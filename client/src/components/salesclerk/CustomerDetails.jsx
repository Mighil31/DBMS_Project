import React from 'react'
import '../css/departmentClerk.css'

const CustomerDetails = (props) => {
    return (
        <div class="detail">
            <h3>Customer name:{props.name}</h3>
            <p><span>Address:</span>{props.address}</p>
            <p><span>Phone number:</span>{props.ph_no}</p>
            <button>Details</button>
            <span class="Overlay">
                <section class="Text">
                    <p><span class="label">Label:</span><span> Lorem ipsum</span></p>
                    <p><span class="label">Label:</span><span> Lorem ipsum</span></p>
                </section>
                <img src={require("../media/images/customer/" + props.image)} />
                
            </span>
        </div>
    )
}

export default CustomerDetails
