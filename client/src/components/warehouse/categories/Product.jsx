import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios'

const Product=(props)=>{

    const [ showOverlay, setOverlay ] = useState(false);
    const [stock, setStock] = useState(props.stock);
    const [ finalStock, setFinalStock ] = useState(props.stock);
    const changeStock = async (e) => {

        try {
            const body = { finalStock }
            console.log(body);
            const res = await axios.put('/api/warehouse/product/' + props.id, body);
            console.log(res.data.data.results[0])
            setStock(res.data.data.results[0].stock);
            setOverlay(false)

        } catch (error) {
            
        }
    }

    const changeStockValue = (e) =>{
        if(e.target.value >=0 )
            setFinalStock(e.target.value)
    }

    return(
        <section className="Product" >
            <h3>{props.brand} {props.prod_name}</h3>
            <img src={require("../../media/images/products/" + props.image)}/>
            <p>Stock left: {stock}</p>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Price: <strong>{value}</strong></p>
                    </>
                )}  
                decimalScale={1}
                value={props.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}

            />
            <button onClick={e =>  setOverlay(true)}>Update Stock</button>
            <span style={{display: showOverlay? 'inherit' : 'none' }} className="Overlay">
                <section className="Text">
                    <section className="UpdateStock">
                        <input type="number" placeholder="enter stock" value={finalStock} onChange={e => changeStockValue(e)}/>
                        <section>
                            <button onClick = {e => changeStock()} className="Update">Update</button>
                            <button onClick = {e =>  setOverlay(false)} className="Cancel">Close</button>
                        </section>
                    </section>
        
                </section>
            </span>
        </section>
    );
}


export default Product;