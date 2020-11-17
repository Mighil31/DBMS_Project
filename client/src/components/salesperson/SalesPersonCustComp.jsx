import React from 'react';
import '../css/salesperson.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Record from './SalesPersonRecord';

const SalespersonCustComp = ({ isAuthenticated, user}) => {

    const [ SPCustomer, setSPCustomer ] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                console.log(axios.defaults.headers.common['auth-token'])
                const spCusts = await axios.get('/api/salesperson/' + user.id + '/customer');
                setSPCustomer(spCusts.data.data.results)

            } catch (err) {
                
            }
        })()
    }, [])
    
    if(user)
    {
        if(user.user_type !== "SP")
            return <Redirect to='/login' />
    }

    return (
        <div className='SP'>
            <div className="Customer">
                <h2>Take a look at your clients' status</h2>
                <div className="Chart-Container">
                    <div className="Customer-Chart">
                        <section className="Title">
                            <h3>ID</h3>
                            <h3>Name</h3>
                            <h3>Status</h3>
                        </section>
                        <div>
                            { SPCustomer && SPCustomer.map(element => {
                                let date = new Date(element.date);
                                let curDate = new Date();
                                const name = `${element.first_name} ${element.last_name}`;
                                const status = curDate.getMonth()- date.getMonth() > 2 ? "Inactive" : "Active";
                                // console.log(element)
                                return (
                                    <Record
                                        key={element.cust_id} 
                                        id={element.cust_id}
                                        name={name} 
                                        status={status}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SalespersonCustComp.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(SalespersonCustComp)
