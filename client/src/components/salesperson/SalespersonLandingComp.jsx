import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/salesperson.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Salesperson = ({ user }) => {
    
    if(user)
    {
        if(user.user_type !== "SP")
            return <Redirect to='/login' />
    }

    return (
        <div className='SP'>
            <div class="Landing">
                <h1
                class="Hero">
                    Welcome back salesperson
                </h1>
                {/* <section class="Scroll">
                    <img src={require("../media/icons/scroll-down.jpg")} />
                </section> */}
            </div>
            <div class="Details">
                <div class="Personal">
                    {/* <h2>Your personal details</h2>
                    <section>
                        <p id="Name"><span class="Label">Name:</span><span class="Value">Richard Malkov</span></p>
                        <p id="Email"><span class="Label">Email:</span><span class="Value">richardmalkov@hotmail.com</span></p>
                        <p id="Address"><span class="Label">Address:</span><span class="Value">No 52/1, Rajaram street, KK nagar,Delhi-07.</span></p>
                    </section> */}
                    {/* <a href="#" class="Update">Update</a> */}
                        {/* <form action="" class="UpdateInfo" id="Form">
                            <button class="Close"></button>
                                <input type="text" name="Name" value="" placeholder="name" /><br/>
                                <input type="email" name="Email" value="" placeholder="email" /><br/>
                                <input type="text" name="Address" value="" placeholder="address" /><br/>
                            <button type="submit" class="Submit">Update</button>
                        </form> */}
                </div>
                
            </div>
        </div>
    )
}

Salesperson.propTypes = {
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, null)(Salesperson)
