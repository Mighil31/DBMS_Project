import React from 'react'
import SalespersonInventory from '../../components/salesperson/SalespersonInventoryComp';
import SalesPersonNav from '../../components/salesperson/SalesPersonNav';

const SalesPerson = () => {
    return (
        <div>
            <SalesPersonNav />
            <SalespersonInventory />
        </div>
    )
}

export default SalesPerson
