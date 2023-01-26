const checklist = require('express').Router()
const db = require('../models')

// INDEX
checklist.get('/', (req, res) => {
    db.DailyChecklist.find()
        .then(checklist => {
            console.log('index', checklist)
            res.json(checklist)
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

// STORE
checklist.post('/', (req, res) => {
    db.DailyChecklist.create(req.body)
        .then(createdChecklist => {
            res.status(200).json({
                data: createdChecklist,
                message: 'Checklist added successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

// SHOW
checklist.get(':/key', (req, res) => {
    db.DailyChecklist.findById(req.params.key)
        .populate('defective_items')
        .then(checklist => {
            res.status(200).json(checklist)
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

// UPDATE
checklist.put(':/key', (req, res) => {
    db.DailyChecklist.findByIdAndUpdate(req.params.key, req.body)
        .then(checklist => {
            res.status(200).json({
                message: 'Checklist updated successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

// DELETE
checklist.delete(':/key', (req, res) => {
    db.DailyChecklist.findByIdAndDelete(req.params.key)
        .then(checklist => {
            res.status(200).json({
                message: 'Checklist deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

module.exports = checklist