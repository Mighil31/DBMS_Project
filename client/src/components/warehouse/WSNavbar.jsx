import React from 'react';
import '../css/warehouse.css';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux'

const NavBar=({ logout })=>{
    return(
        <div className='WS'>
            <header>
                <nav
                className="SpNav">
                    <a href="/" className="Home">DropTable</a>
                    <section>
                    <a href="/warehouse/inventory" className="Inv">Inventory</a>
                    <a onClick={logout} className="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
        </div>
    )
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
};


export default connect(null, { logout })(NavBar);