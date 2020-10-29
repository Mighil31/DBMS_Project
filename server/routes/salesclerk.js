const express = require('express');
const router = express.Router();
const db = require("../db")

router.get('/customer', async (req, res) => {

    try {
        const results = await db.query("select * from customer natural join addr");
        
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                customer: results.rows
            }
        })
    } catch (error) {
        console.log(error)
    }
});

router.put('/customer/:id', async (req, res) => {
    try {
        const cust = await db.query("update customer set first_name=$1, last_name=$2 where cust_id=$3 returning *", [ req.body.first_name, req.body.last_name, req.params.id])
        const addr = await db.query("update addr set state_=$1, city=$2, street=$3, pincode=$4 where addr_id=$5 returning *", 
                                                            [req.body.state, req.body.city, req.body.street, req.body.pincode, req.body.addr_id])
        res.status(200).json({
            status: "success",
            data: {
                customer: cust.rows[0],
                cust: addr.rows[0],
            }
        })
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;