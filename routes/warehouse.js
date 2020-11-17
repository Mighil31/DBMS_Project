const express = require('express');
const router = express.Router();
const db = require("../db");
const eval_role = require('../middleware/eval-role');

router.get('/:category', eval_role("WS"), async (req, res) => {

    try {
        const results = await db.query("select * from products where category=$1", [req.params.category]);
        
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

router.post('/product', eval_role("WS"), async (req, res) => {

    try {
        const results = await db.query("insert into products (brand, prod_name, price, category, stock, image) values ($1, $2, $3, $4, $5, $6) returning *", 
                        [req.body.brand, req.body.prod_name, req.body.price, req.body.category, req.body.stock, req.body.image]);
        
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

router.put('/product/:id', eval_role("WS"), async (req, res) => {

    try {
        const results = await db.query("update products set stock=$1 where prod_id=$2 returning *", [req.body.finalStock, req.params.id]);
        
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




module.exports = router;