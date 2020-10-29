const express = require('express');
const router = express.Router();
const db = require("../db")

router.get('/:id', async (req, res) => {
    try {
        const results = await db.query("select * from sp_prod natural join salesperson natural join products where emp_id=$1", [req.params.id]);
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                addr: results.rows
            }
        })
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;