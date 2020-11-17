import React from 'react'
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../components/css/departmentClerk.css'  
import CustomerDetails from '../components/salesclerk/CustomerDetails';
import OrderDetails from '../components/salesclerk/OrderDetails';
import SalesClerkNav from '../components/salesclerk/SalesclerkNav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SalesClerkInfo = ({ user }) => {

    const [ showCustDetails , setShowCustDetails ] = useState(false);
    const [ customerDetails, setCustomerDetails ] = useState([]);
    const [ orderDetails, setOrderDetails ] = useState([]);
    const [ orderPrice, setOrderPrice ] = useState([]);

    var CustomerClassName = showCustDetails ? 'Customer Active' : 'Customer';
    var OrderClassName = showCustDetails ? 'Order' : 'Order Active';

    useEffect(() => {
        (async () => {
            try {
                const customer = await axios.get('/api/salesclerk/customer');
                const orders = await axios.get('/api/salesclerk/customer/orders');
                const price = await axios.get('/api/salesclerk/customer/orders/price');

                // console.log(customer.data.data.customer)
                setCustomerDetails(customer.data.data.customer);
                setOrderDetails(orders.data.data.order);
                setOrderPrice(price.data.data.order);

            } catch (err) {
                return <Redirect to="/salesperson" />;
            }
        })()
    }, [])

    if(user)
    {
        if(user.user_type !== "SC")
            return <Redirect to='/login' />
    }

    return (
        <div className='DC'>
            <SalesClerkNav />
            <section className="Toggle">
                <button onClick={() => setShowCustDetails(false)} className={OrderClassName} >Orders</button>
                <button onClick={() => setShowCustDetails(true)} className={CustomerClassName} >Customers</button>
            </section>
                <button data-aos="fade-right" className="Refresh">Refresh</button>
    
            <div 
                className="Clerk-Customer"
                style={{display: showCustDetails ? 'inherit' : 'none' }}
            >
                <h1>
                    Welcome clerk,now you are looking at customer details.
                </h1>
                <div className="Customer-details">
                    { customerDetails && customerDetails.map(element => {
                        console.log(element)
                        const name = `${element.first_name} ${element.last_name}`;
                        const address = `${element.street}, ${element.city}, ${element.state_} - ${element.pincode}`;
                        return (
                            <CustomerDetails 
                                key={element.cust_id} 
                                id={element.cust_id}
                                name={name} 
                                address={address} 
                                ph_no={element.ph_no}
                                image={element.dp}
                            />
                        )
                    })}
                </div>
            </div>
            <div 
                className="Clerk-Orders OffScreen"
                style={{display: showCustDetails ? 'none' : 'inherit' }}
            >
                <h1>
                    Welcome clerk,now you are looking at Order details.
                </h1>
                <div className="Order-details">
                { 
                    orderDetails && orderPrice && orderDetails.map(element => {
                        let date = new Date(element.date_)
                        const name = `${element.first_name} ${element.last_name}`;
                        const address = `${element.street}, ${element.city}, ${element.state_} - ${element.pincode}`;
                        let price = orderPrice.filter(obj => {
                            return obj.order_id === element.order_id
                        })

                        return (
                            <OrderDetails 
                                key={element.order_id} 
                                id={element.order_id}
                                name={name} 
                                address={address} 
                                date={date}
                                order_status={element.order_status}
                                price={price[0] ? price[0].sum : 5000}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

SalesClerkInfo.propTypes = {
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, null)(SalesClerkInfo)
