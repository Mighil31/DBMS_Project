import React from 'react'
import '../css/departmentClerk.css'

const OrderDetails = (props) => {
    return (
        <div className="detail">
            <h3>Order ID:{props.id}</h3>
            <p><span>Order Name:</span>{props.name}</p>
            <p><span>Order Order:</span>{props.address}</p>
            <p><span>Order total:</span>{props.price}</p>
            <p><span>Order Date:</span>{props.date}</p>
            <p><span>Order Status:</span>{props.order_status}</p>
    
        </div>
    )
}

export default OrderDetails
