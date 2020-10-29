require("dotenv").config()

const express = require('express')
const db = require("./db")
const app = express()


app.use(express.json({ extended: false }))


app.get('/', (req, res) => res.send('API running'));

app.use('/api/salesperson', require('./routes/salesperson'));
app.use('/api/salesclerk', require('./routes/salesclerk'));

//Salesperson route

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})