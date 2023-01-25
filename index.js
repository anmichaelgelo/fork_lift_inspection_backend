const express = require('express')
const app = express()

// Middleware / Config
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Page Not Found'
    })
})

app.listen(process.env.PORT, (err) => {
    if(!err){
        console.log('Connected to port ' + process.env.PORT)
    }
})

module.exports = app