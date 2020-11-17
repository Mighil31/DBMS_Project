require("dotenv").config()
const cors = require("cors")
const express = require('express')
const db = require("./db")
const app = express()
const path = require('path');

app.use(express.json({ extended: false }))
app.use(cors())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client/build")))
}


app.get('/', (req, res) => res.send('API running'));

app.use('/api/salesperson', require('./routes/salesperson'));
app.use('/api/salesclerk', require('./routes/salesclerk'));
app.use('/api/warehouse', require('./routes/warehouse'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));



//Salesperson route

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})