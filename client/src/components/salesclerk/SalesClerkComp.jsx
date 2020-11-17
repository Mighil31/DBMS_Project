import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/departmentClerk.css';
import { Redirect } from 'react-router-dom';

const SalesClerkComp = ({ user }) => {

    if(user)
    {
        if(user.user_type !== "SC")
            return <Redirect to='/login' />
    }

    return (
        <div className='DC'>
    
            <div className="Landing">
                <h1 className="Hero">
                    Welcome back sales clerk
                </h1>
            </div>
            <div className="Details">
                <div className="Personal">
                        {/* <form 
                            action=""  
                            className="UpdateInfo" 
                            id="Form"
                            style={{display: showForm ? 'inherit' : 'none' }}
                            >
                            <button onClick={e => toggleForm(e)} className="Close"></button>
                            <input type="text" name="Name" value="" placeholder="name" /><br/>
                            <input type="email" name="Email" value="" placeholder="email" /><br/>
                            <input type="text" name="Address" value="" placeholder="address" /><br/>
                            <button type="submit" className="Submit">Update</button>
                        </form> */}
                </div>
            </div>
        </div>
    )
}

SalesClerkComp.propTypes = {
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, null)(SalesClerkComp)
