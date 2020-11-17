import React from 'react';
import '../css/salesperson.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Product from './SalesPersonProduct';

const SalespersonInventoryComp = ({ isAuthenticated, user}) => {

    const [ SPDetails, setSPDetails ] = useState([]);

    
    console.log(user.id)
    useEffect(() => {
        (async () => {
            try {
                const spProds = await axios.get('http://localhost:8000/api/salesperson/' + user.id)
            
                setSPDetails(spProds.data.data.results)

            } catch (err) {
                
            }
        })()
    }, [])

    if(!isAuthenticated)
     return <Redirect to='/login' />

    return (
        <div className='SP'>
            <div class="Inventory">
                 <h2>Hey Richard,take a look at your stocks.</h2>

                <form action="" class="NewProductData" id="Form">
                    <button class="Close"></button>
                        <input type="text" name="Pname" value="" placeholder="product name" /><br/>
                        Upload image:<input type="file" name="PImage"value="" placeholder="product image" /><br/>
                        <input type="text" name="Price" value="" placeholder="price" /><br/>
                        <input type="text" name="Stock" value="" placeholder="stock left" /><br/>
                    <button type="submit" class="Submit">Add Product</button>
                </form>

                <div class="Inv-Container">
                    { SPDetails && SPDetails.map(element => {
                            return (
                                <Product
                                    key={element.prod_id} 
                                    prod_name={element.prod_name} 
                                    image={element.image} 
                                />
                            )
                        })}
                    <button class="AddProduct">Add new product</button>
                </div>
            </div>
        </div>
    )
}

SalespersonInventoryComp.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, null)(SalespersonInventoryComp)
