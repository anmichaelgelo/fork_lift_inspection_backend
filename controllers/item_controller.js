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

items.post('/', (req, res) => {
    db.Item.create(req.body)
        .then(item => {
            res.status(200).json({
                data: item,
                message: 'Item created successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

items.get('/:key', (req, res) => {
    db.Item.findById(req.params.key)
        .then(item => {
            if(item !== null) {
                res.status(200).json({
                    data: item
                })   
            }else{
                res.status(404).json({
                    message: 'No record found',
                    data: null
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

items.put('/:key', (req, res) => {
    db.Item.findByIdAndUpdate(req.params.key, req.body)
        .then(item => {
            if(item !== null){
                res.status(200).json({
                    data: item,
                    message: 'Item updated successfully'
                })
            }else{
                res.status(404).json({
                    message: 'No record found',
                    data: null
                })
            }
            
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

items.delete('/:key', (req, res) => { 
    db.Item.findByIdAndDelete(req.params.key)
        .then(item => {
            if(item !== null){
                res.status(200).json({
                    message: 'Item deleted successfully'
                })
            }else{
                res.status(404).json({
                    message: 'No record found',
                    data: null
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
})

module.exports = items