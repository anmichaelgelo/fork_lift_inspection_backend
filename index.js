const express = require('express')
const app = express()

// Middleware / Config
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Controllers
app.use('/daily_checklist', require('./controllers/daily_checklist_controller'))
app.use('/items', require('./controllers/item_controller'))

// Root Index
app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

// 404 status
app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Page Not Found'
    })
})

// listen to port
app.listen(process.env.PORT, (err) => {
    if(!err){
        console.log('Connected to port ' + process.env.PORT)
    }
})

module.exports = app