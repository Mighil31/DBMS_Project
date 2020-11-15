const express = require('express');
const router = express.Router();
const db = require("../db");
const eval_role = require('../middleware/eval-role');

// router.get('/customer', eval_role('SC'), async (req, res) => {

//     try {
//         const results = await db.query("select * from customer natural join addr");
        
//         res.json({
//             status: "success",
//             results: results.rows.length,
//             data: {
//                 customer: results.rows
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// });


router.get('/customer', async (req, res) => {
    try {
        const results = await db.query("select * from customer natural join addr natural join cust_phone");
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

router.put('/customer/:id', eval_role('SC'),async (req, res) => {
    try {
        const cust = await db.query("update customer set first_name=$1, last_name=$2 where cust_id=$3 returning *", [ req.body.first_name, req.body.last_name, req.params.id])
        const addr = await db.query("update addr set state_=$1, city=$2, street=$3, pincode=$4 where addr_id=$5 returning *", 
                                                            [req.body.state, req.body.city, req.body.street, req.body.pincode, req.body.addr_id])
        res.status(200).json({
            status: "success",
            data: {
                customer: cust.rows,
                cust: addr.rows,
            }
        })
    } catch (error) {
        console.log(error)
    }
});

// router.get('/customer/orders', eval_role('SC'), async (req, res) => {
//     try {
//         const order = await db.query("select * from order_info natural join order_line natural join customer");
//         // console.log(order);
//         res.status(200).json({
//             status: "success",
//             data: {
//                 order: order.rows
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

router.get('/customer/orders', async (req, res) => {
    try {
        const order = await db.query("select * from order_info natural join order_line natural join customer natural join addr;");
        // console.log(order);
        res.status(200).json({
            status: "success",
            data: {
                order: order.rows
            }
        })
    } catch (error) {
        console.log(error)
    }
})


// router.get('/customer/orders/price', eval_role('SC'), async (req, res) => {
//     try {
//         const price = await db.query("select order_id, sum(price) from order_products natural join products group by order_id;");
//         // console.log(order);
//         res.status(200).json({
//             status: "success",
//             data: {
//                 order: price.rows
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })

router.get('/customer/orders/price', async (req, res) => {
    try {
        const price = await db.query("select order_id, sum(price) from order_products natural join products group by order_id;");
        // console.log(order);
        res.status(200).json({
            status: "success",
            data: {
                order: price.rows
            }
        })
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;