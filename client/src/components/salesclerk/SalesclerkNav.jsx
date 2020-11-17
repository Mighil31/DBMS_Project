import React from 'react';
import '../css/warehouse.css';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux'

const SalesclerkNav=({ logout })=>{
    return(
        <div className='DC'>
            <header>
                <nav 
    
                className="SpNav" >
                    <a className="Home">DropTable</a>
                    <section>
                        <a  href="/salesclerk/info" className="Det">Info</a>
                        <a onClick={logout} className="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
        </div>
    )
}

SalesclerkNav.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(SalesclerkNav);