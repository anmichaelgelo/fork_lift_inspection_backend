const items = require('express').Router()
const db = require('../models')

// INDEX
items.get('/', (req, res) => {
    db.Item.find()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

module.exports = items