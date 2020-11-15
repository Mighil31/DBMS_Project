import React, { useState } from 'react';
import { useEffect } from 'react';
import '../../css/warehouse.css';
import axios from 'axios';
import Product from './Product';

const BuildingMatComp=()=>{

    const [buildingmat, setBuildingMat] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const buildingmat = await axios.get('http://localhost:8000/api/warehouse/building_materials');
                setBuildingMat(buildingmat.data.data.results);

            } catch (err) {
                
            }
        })();

    }, [])

    function titleCase(str) {

        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
     }

    return(
        <div className="WS">
            <div class="Products" id="Pipe">
                <h2>Hey Richard,take a look at our stocks.
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
                    { buildingmat && buildingmat.map(element => {

                        let category = titleCase(element.category.replace(/_/g, " "));
                        
                        return (
                            <Product
                                key={element.prod_id} 
                                prod_name={element.prod_name} 
                                price={element.price} 
                                category={category}
                                stock={element.stock}
                                image={element.image}
                            />
                        )
                    })}
                </div>
                <button class="AddProduct">Add new product</button>
            </div>
        </div>
    );
}


export default BuildingMatComp;