const checklist = require('express').Router()
const db = require('../models')

// INDEX ROUTER
checklist.get('/', (req, res) => {
    db.DailyChecklist.find()
        .then(checklist => {
            res.json(checklist)
        })
        .catch(err => {
            console.error(err)
        })
})

module.exports = checklist