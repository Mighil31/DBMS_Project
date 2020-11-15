import React, { useState } from 'react';
import { useEffect } from 'react';
import '../css/warehouse.css';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';

const WSInventory=()=>{

    let history = useHistory();

    // const [buildingMat, setBuildingMat] = useState([]);
    // const [electrical, setElectrical] = useState([]);
    // const [pipesFittings, setPipesFittings] = useState([]);

    // useEffect(() => {

    //     (async () => {
    //         try {
    //             const buildingRes = await axios.get('http://localhost:8000/api/warehouse/building_materials');
    //             const electricalRes = await axios.get('http://localhost:8000/api/warehouse/electrical');
    //             const pipesRes = await axios.get('http://localhost:8000/api/warehouse/pipes_fitting');

    //             // console.log(customer.data.data.customer)
    //             setBuildingMat(buildingRes.data.data.results);
    //             setElectrical(electricalRes.data.data.results);
    //             setPipesFittings(pipesRes.data.data.results);

    //         } catch (err) {
                
    //         }
    //     })()
    // })

    const redirect = e => {
        const res ="/warehouse/inventory/" + e.target.name;
        console.log(res);
        history.push(res);
        
    }

    return(
        <div className="WS">

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
                            <a name="electricals" onClick={e => redirect(e)}><button className="Browse">Browse</button></a>
                        </section>
                    </section>

                    <section className="Category">
                        <div className="Imageholder">
                            <img src={require("../media/images/categories/pipes.jpg")}/>
                        </div>
                        <section className="Text">
                            <h3>Pipes and Fittings</h3>
                            <a name="pipes" onClick={e => redirect(e)}><button className="Browse">Browse</button></a>
                        </section>
                    </section>

                </div>
            </div>
        </div>
    );
}



export default WSInventory;