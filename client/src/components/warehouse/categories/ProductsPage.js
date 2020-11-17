import React from 'react';



const ProductsPage=()=>{
    return(
        <div class="Products" id="Pipe">
        <h2>Take a look at our stocks.
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
        
            code 
            for 
            products 
            here
        
        </div>
        <button class="AddProduct">Add new product</button>
        </div>
    );
}


export default ProductsPage;