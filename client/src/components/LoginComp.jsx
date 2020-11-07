import React from 'react';
import './css/Login.css';

const LoginComp = () => {
    return (
        <div className="login__main">
            <div data-aos="fade-right" class="Intro">
                <h1>
                    Your construction needs,
                    <br />fulfilled
                </h1>
            </div>

            <div className="Signin">
                <span className="Logo">Drop Table</span>
                <form 
                data-aos="fade-left"
                className="Form">
                    <section className="Entry">
                    <input type="username" className="Username" id="Username"  placeholder="username"/>
                    <input type="password" className="Password" id="Password"  placeholder="password"/>
                    </section>
                    <a href="#"><button className="Sin">Sign in</button></a>
                    <h3>New user?</h3>
                    <a href=""><button className="Sup">Sign up</button></a>
                </form>
            </div>
        </div>
    )
}

export default LoginComp
