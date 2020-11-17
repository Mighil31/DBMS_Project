import React, { useState } from 'react';
import { useEffect } from 'react';
import '../../css/warehouse.css';
import axios from 'axios';
import Product from './Product';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ElectricalComp=({ user })=>{

    const [electrical, setElectrical] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const electrical = await axios.get('/api/warehouse/electrical');
                setElectrical(electrical.data.data.results);

            } catch (err) {
                
            }
        })();

    }, [])

    if(user)
    {
        if(user.user_type !== "WS")
            return <Redirect to='/login' />
    }

    return(
        <div className="WS">
            <div class="Products" id="Pipe">
                <h2>These are the electrical products.
                </h2>


                <form action="" class="NewProductData" id="Form">
                    <button class="Close"></button>
                    <input type="text" name="Pname" value="" placeholder="product name"/><br/>
                    Upload image:<input type="file" name="PImage"value="" placeholder="product image"/><br/>
                    <input type="text" name="Price" value="" placeholder="price"/><br/>
                    <input type="text" name="Stock" value="" placeholder="stock left"/><br/>
                    <button type="submit" class="Submit">Add Product</button>
                </form>

                <div class="Products-Container">
                    { electrical && electrical.map(element => {

                        
                        return (
                            <Product
                                key={element.prod_id} 
                                id={element.prod_id}
                                prod_name={element.prod_name} 
                                price={element.price} 
                                stock={element.stock}
                                brand={element.brand}
                                image={element.image}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

ElectricalComp.propTypes = {
    user: PropTypes.object,
  };

const mapStateToProps = state => ({
    user: state.auth.user
});


export default connect(mapStateToProps, null)(ElectricalComp);