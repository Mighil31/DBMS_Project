import React from 'react';
import '../css/salesperson.css';

const Salesperson = () => {

    // useEffect(() => {
        
    //     const data = async () => {

    //         try {
    //             const response = await 
    //         } catch (error) {
                
    //         }
    //     }
        
    // }, [])

    return (
        <div className='SP'>
            <div class="Landing">
                <h1
                class="Hero">
                    Welcome back salesperson
                </h1>
                <section class="Scroll">
                    <img src={require("../media/icons/scroll-down.jpg")} />
                </section>
            </div>
            <div class="Details">
                <div class="Personal">
                    <h2>Your personal details</h2>
                    <section>
                        <p id="Name"><span class="Label">Name:</span><span class="Value">Richard Malkov</span></p>
                        <p id="Email"><span class="Label">Email:</span><span class="Value">richardmalkov@hotmail.com</span></p>
                        <p id="Address"><span class="Label">Address:</span><span class="Value">No 52/1, Rajaram street, KK nagar,Delhi-07.</span></p>
                    </section>
                    <a href="#" class="Update">Update</a>
                        <form action="" class="UpdateInfo" id="Form">
                            <button class="Close"></button>
                                <input type="text" name="Name" value="" placeholder="name" /><br/>
                                <input type="email" name="Email" value="" placeholder="email" /><br/>
                                <input type="text" name="Address" value="" placeholder="address" /><br/>
                            <button type="submit" class="Submit">Update</button>
                        </form>
                </div>
                <div class="CustandInv">
                    <div class="Cust">
                        <h3>Bigil kumar</h3>
                        <h3>Koli ravi</h3>
                        <h3>Bigil kumar</h3>
                        <h3>Kokki kumaru</h3>
                        <h3>Mamooti</h3>

                    </div>
                    <div class="Inv">
                        <h3>Shankar Cement</h3>
                        <h3>Agni TMT rods</h3>
                        <h3>Rahul furniture</h3>
                        <h3>Mutton Biriyani</h3>
                        <h3>Chicken Biriyani</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Salesperson
