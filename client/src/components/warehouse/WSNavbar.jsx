import React from 'react';
import '../css/warehouse.css';

const NavBar=()=>{
    return(
        <div className='WS'>
            <header>
                <nav
                className="SpNav">
                    <a href="/" className="Home">DropTable</a>
                    <section>
                    <a href="/warehouse/inventory" className="Inv">Inventory</a>
                    <a href="../signin/signin.html" className="Sout">Sign out</a>
                    </section>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;