import React from 'react';

const SalesPersonNav = () => {
    return (
        <div className='SP'>
            <header>
                <nav 
                class="SpNav">
                    <a href="#" class="Home">DropTable</a>
                    <section>
                        <a href="/salesperson/inventory" class="Inv">Inventory</a>
                        <a href="/salesperson/customer" class="Cust">Customers</a>
                        <a href="/login" class="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
        </div>
    )
}

export default SalesPersonNav
