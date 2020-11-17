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
                const buildingmat = await axios.get('/api/warehouse/building_materials');
                setBuildingMat(buildingmat.data.data.results);

            } catch (err) {
                
            }
        })();

    }, [])

    return(
        <div className="WS">
            <div className="Products" id="Pipe">
                <h2>Hey Richard,take a look at our stocks.
                </h2>

                <div className="Products-Container">
                    { buildingmat && buildingmat.map(element => {

                        return (
                            <Product
                                key={element.prod_id} 
                                prod_name={element.prod_name} 
                                id={element.prod_id}
                                price={element.price} 
                                brand={element.brand}
                                stock={element.stock}
                                image={element.image}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}


export default BuildingMatComp;