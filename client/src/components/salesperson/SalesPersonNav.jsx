import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const SalesPersonNav = ({ logout }) => {
    return (
        <div className='SP'>
            <header>
                <nav 
                className="SpNav">
                    <a href="#" class="Home">DropTable</a>
                    <section>
                        <a href="/salesperson/inventory" class="Inv">Inventory</a>
                        <a href="/salesperson/customer" class="Cust">Customers</a>
                        <a onClick={logout} href="#!" class="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
        </div>
    )
}

SalesPersonNav.propTypes = {
    logout: PropTypes.func.isRequired,
};


export default connect(null, { logout })(SalesPersonNav)
