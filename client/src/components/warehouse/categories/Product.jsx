import React from 'react';
import CurrencyFormat from 'react-currency-format';

const Product=(props)=>{

    return(
        <section class="Product" >
                <h3>{props.brand} {props.prod_name}</h3>
                <img src={require("../../media/images/products/" + props.image)}/>
                <p>Stock left: {props.stock}</p>
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
                <button>Details</button>
                <span class="Overlay">
                    <section class="Text">
                    <h4>
                        Product title
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text 
                        <br/>of the printing and typesetting 
                        <br/>industry.Lorem Ipsum has been 
                        <br/>the industry's standard dummy
                    </p>
                </section>
                </span>
            </section>
    );
}


export default Product;