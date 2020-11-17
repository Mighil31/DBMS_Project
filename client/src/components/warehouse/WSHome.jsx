import React from 'react';
import '../css/warehouse.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';        

const WSHome=({ user })=>{

    if(user)
    {
        if(user.user_type !== "WS")
            return <Redirect to='/login' />
    }

    return(
        <div className='WS'>
            <div className="Landing">
                <h1 className="Hero">
                    Welcome back warehouse supervisor
                </h1>
                <section className="Scroll">
                    <img src={require("../media/icons/scroll-down.jpg")}/>
                </section>
            </div>
            <div className="Details">
                    <div
                    className="Personal">
                        {/* <h2>Your personal details</h2>
                        <section>
                        <p id="Name"><span className="Label">Name:</span><span className="Value">Richard Malkov</span></p>
                        <p id="Email"><span className="Label">Email:</span><span className="Value">richardmalkov@hotmail.com</span></p>
                        <p id="Address"><span className="Label">Address:</span><span className="Value">No 52/1, Rajaram street, KK nagar,Delhi-07.</span></p>
                        </section>
                        <a href="#" className="Update">Update</a>
                            <form action="" className="UpdateInfo" id="Form">
                                <button className="Close"></button>
                                <input type="text" name="Name" value="" placeholder="name"/><br/>
                                <input type="email" name="Email" value="" placeholder="email"/><br/>
                                <input type="text" name="Address" value="" placeholder="address"/><br/>
                                <button type="submit" className="Submit">Update</button>
                            </form> */}
                    </div>
            </div>
        </div>
    );
}

WSHome.propTypes = {
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, null)(WSHome);