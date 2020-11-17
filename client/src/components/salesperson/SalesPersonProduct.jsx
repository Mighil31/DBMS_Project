import React from 'react'

const SalesPersonProduct = (props) => {
    return (
        <div>
            <section class="Product">
                <h3>{props.prod_name}</h3>
                <img src={require("../media/images/products/" + props.image)} />
                <p>Stock left: 10</p>
                <button>Details</button>
                <span class="Overlay">
                    <section class="Text">
                        <h4>
                            {props.prod_name}
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
        </div>
    )
}

export default SalesPersonProduct
