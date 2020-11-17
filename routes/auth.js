require("dotenv").config()
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const db = require('../db');
const auth = require("../middleware/auth");


router.get('/', auth, async (req, res) => {
    try {
        // console.log(req.user)
        const user = await db.query('select * from user_login where id=$1', [req.user.id]);
        // console.log(user.rows[0])
        res.json(user.rows[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error')
    }
})


router.post('/', [
        check('user_name', 'User name is required').not().isEmpty(),
        check('passwd', 'Please enter a password with 6 or more characters').isLength({ min: 6})
    ],
    async (req, res ) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let { user_name, passwd } = req.body;

        try {
            let user = await db.query('select * from user_login where user_name=$1', [user_name]);
            // console.log(user);
            if(user.rows.length == 0) {
                return res.status(400).json({ errors: [{ msg: "Invalid credentials"}]})
            }

            // console.log(user.rows[0].passwd)

            const isMatch = await bcrypt.compare(passwd, user.rows[0].passwd)

            if(!isMatch) {
                return res.status(400).json({ errors: [{ msg: "Invalid credentials"}]})
            }

            const payload = {
                user: {
                    id: user.rows[0].id,
                    user_type: user.rows[0].user_type
                }
            }

            console.log(payload)

            jwt.sign(
                payload,
                process.env.SECRET,
                { expiresIn: 360000},
                (err, token) => {
                    if(err) throw err;
                    res.json({ token });
                }
            )

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error')
        }
    }
)

module.exports = router;
