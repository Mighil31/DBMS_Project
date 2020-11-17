import React, {useState, useEffect} from 'react'
import '../css/departmentClerk.css';
import axios from 'axios';

const CustomerDetails = (props) => {

    const [showOverlay, setOverlay] = useState(false);

    return (
        <div className="detail">
            <div className="info">
                <h3>Customer name:{props.name}</h3>
                <p><span>Address:</span>{props.address}</p>
                <p><span>Phone number:</span>{props.ph_no}</p>
            </div>
            <img src={require("../media/images/customer/" + props.image)} />

        </div>
    )
}

export default CustomerDetails
