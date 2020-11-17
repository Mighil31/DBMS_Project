import React, { useState } from 'react';
import { useEffect } from 'react';
import '../../css/warehouse.css';
import axios from 'axios';
import Product from './Product';

const PipesComp=()=>{

    const [pipes, setPipes] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const pipes = await axios.get('http://localhost:8000/api/warehouse/pipes_fitting');
                setPipes(pipes.data.data.results);

            } catch (err) {
                
            }
        })();

    }, [])

    return(
        <div className="WS">
            <div class="Products" id="Pipe">
                <h2>Hey Richard, These are the pipes products.
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
                    { pipes && pipes.map(element => {

                        
                        return (
                            <Product
                                key={element.prod_id} 
                                id={element.prod_id}
                                prod_name={element.prod_name} 
                                price={element.price} 
                                stock={element.stock}
                                image={element.image}
                                brand={element.brand}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}


export default PipesComp;