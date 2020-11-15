import React from 'react'
import '../css/departmentClerk.css'

const CustomerDetails = (props) => {
    return (
        <div className="detail">
            <h3>Customer name:{props.name}</h3>
            <p><span>Address:</span>{props.address}</p>
            <p><span>Phone number:</span>{props.ph_no}</p>
            {/* <p><span>Email:</span>${Email}</p> */}
            <button>Details</button>
        </div>
    )
}

export default CustomerDetails
