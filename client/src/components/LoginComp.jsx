import React from 'react';
import { useState } from 'react';
// import './css/Login.css';
import { login } from '../actions/auth'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const LoginComp = ({ user, login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        user_name: "",
        passwd: ""
    });

    const { user_name, passwd } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();
        login(user_name, passwd)
        
    }

    if (isAuthenticated && user !== null) {


        if(user.user_type == 'SP')
            return <Redirect to="/salesperson" />;
        else if (user.user_type == 'WS')
            return <Redirect to='/warehouse' />
        // else if (user.user_type == 'SC')
        
    }

    return (
        <div className="login__main">
            <div data-aos="fade-right" className="Intro">
                <h1>
                    Your construction needs,
                    <br />fulfilled
                </h1>
            </div>

            <div className="Signin">
                <span className="Logo">Drop Table</span>
                <form 
                data-aos="fade-left"
                className="Form"
                onSubmit={e => onSubmit(e)}>
                    <section className="Entry">
                    <input type="username" className="Username" id="user_name" name="user_name" onChange={e => onChange(e)} placeholder="username"/>
                    <input type="password" className="Password" id="passwd" name="passwd" onChange={e => onChange(e)} placeholder="password"/>
                    </section>
                    <a href="#"><button type="submit" className="Sin">Sign in</button></a>
                    <h3>New user?</h3>
                    {/* <a href=""><button className="Sup">Sign up</button></a> */}
                </form>
            </div>
        </div>
    )
}

LoginComp.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };
  
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { login })(LoginComp);
