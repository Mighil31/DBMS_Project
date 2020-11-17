const express = require('express');
const router = express.Router();
const db = require("../db")
const eval_role = require('../middleware/eval-role')

router.get('/:id', eval_role('SP'), async (req, res) => {
    try {
        const results = await db.query("select * from sp_prod natural join salesperson natural join products where emp_id=$1", [req.params.id]);
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                results: results.rows
            }
        })
    } catch (error) {
        console.log(error)
    }
});

router.get('/:id/customer', eval_role('SP'), async (req, res) => {
    try {
        const results = await db.query("select distinct cust_id, date_ from order_products natural join sp_prod natural join order_line natural join order_info where emp_id=$1", [req.params.id]);
        
        let customers = []

        for (const el of results.rows) {
            console.log(el.cust_id);
            const res = await db.query("select * from customer where cust_id=$1", [el.cust_id]);
            res.rows[0].date = el.date_;
            customers.push(res.rows[0]);
        };

        console.log(customers)

        res.json({
            status: "success",
            data: {
                results: customers
            }
        })

    } catch (error) {
        console.log(error)
    }
});




module.exports = router;