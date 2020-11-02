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
                addr: results.rows
            }
        })
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;