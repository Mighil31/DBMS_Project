import React, { useState } from 'react';
import { useEffect } from 'react';
import '../css/warehouse.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';



const WSInventory=()=>{

    const [ showForm, setShowForm] = useState(false);

    let history = useHistory();

    const [ formData , setFormData ] = useState({
        "prod_name": "",
        "brand": "",
        "form_image": "",
        "image": "",
        "price": 0,
        "category": "electrical",
        "stock": 0
    })

    const onChange = (e) => {

            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
    }

    
    const onSubmit = async (e) =>{
        e.preventDefault();

        formData.image = formData.form_image.split("").reverse().join("").split("\\")[0].split('').reverse().join('');

        try {
            const res = await axios.post('http://localhost:8000/api/warehouse/product', formData);
            setShowForm(false);

        } catch (error) {
            
        }

    }

    const redirect = e => {
        const res ="/warehouse/inventory/" + e.target.name;
        console.log(res);
        history.push(res);
        
    }

    return(
        <div className="WS">

            <form 
                action="" 
                className="NewProductData" 
                id="Form"
                style={{display: showForm ? "inherit": "none" }}
                onSubmit={e => onSubmit(e)}
                >
                <button onClick={e => setShowForm(false)} className="Close"></button>
                <input onChange={e => onChange(e) } type="text" name="prod_name" value={formData.prod_name} placeholder="product name"/><br/>
                <input onChange={e => onChange(e) } type="text" name="brand" value={formData.brand} placeholder="product brand"/><br/>
                Upload image:<input onChange={e => onChange(e) } type="file" name="form_image" value={formData.form_image} placeholder="product image"/><br/>
                <input onChange={e => onChange(e) } type="text" name="price" value={formData.price} placeholder="price"/><br/>
                <section className="category">
                    <select value={formData.category} onChange={e => onChange(e)} name="category" id="category">
                        <option value="electrical">Electrical</option>
                        <option value="building_materials">Building Material</option>
                        <option value="pipes_fitting">Pipes and Fittings</option>
                    </select>
                </section>
                <input onChange={e => onChange(e) } type="text" name="stock" value={formData.stock} placeholder="stock left"/><br/>
                <button type="submit" className="Submit">Add Product</button>
            </form>

            <div className="Inventory">
                <h1
                >Take a look at our product categories</h1>
                <div

                className="Container">

                    <section className="Category">

                        <div className="Imageholder">
                            <img src={require("../media/images/categories/buildingmat.jpg")}/>
                        </div>
                        <section className="Text">
                            <h3>Building Materials</h3>
                            <a name="buildingmat" onClick={e => redirect(e)}><button name="buildingmat" className="Browse">Browse</button></a>
                        </section>
                    </section>

                    <section className="Category">
                        <div className="Imageholder">
                            <img src={require("../media/images/categories/elctricals.jpg")}/>
                        </div>
                        <section className="Text">
                            <h3>Electricals</h3>
                            <a name="electricals" onClick={e => redirect(e)}><button name="electrical" className="Browse">Browse</button></a>
                        </section>
                    </section>

                    <section className="Category">
                        <div className="Imageholder">
                            <img src={require("../media/images/categories/pipes.jpg")}/>
                        </div>
                        <section className="Text">
                            <h3>Pipes and Fittings</h3>
                            <a name="pipes" onClick={e => redirect(e)}><button name="pipes" className="Browse">Browse</button></a>
                        </section>
                    </section>

                </div>
                <button onClick={e => showForm ? setShowForm(false): setShowForm(true)} className="AddProduct">Add new product</button>     

            </div>
        </div>
    );
}



export default WSInventory;