const inspections = require('express').Router()
const db = require('../models')

// INDEX
inspections.get('/', (req, res) => {
    db.Inspection.find()
        .then(inspection => {
            if(inspection.length > 0) {
                res.status(200).json({
                    count: inspection.length,
                    data: inspection
                })
            }else{
                res.json({
                    count: 0,
                    message: 'No records found',
                    data: []
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

// STORE
inspections.post('/', (req, res) => {
    db.Inspection.create(req.body)
        .then(inspection => {
            res.status(200).json({
                data: inspection,
                message: 'Inspection added successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

// SHOW
inspections.get('/:id', (req, res) => {
    db.Inspection.findById(req.params.id)
        .then(inspection => {
            if(inspection !== null) {
                res.status(200).json({
                    data: inspection
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
});

// UPDATE
inspections.put('/:id', (req, res) => {
    db.Inspection.findByIdAndUpdate(req.params.id, req.body)
        .then(inspection => {
            if(inspection !== null) {
                res.json({
                    data: inspection,
                    message: 'Inspection updated successfully'
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
});

// DELETE
inspections.delete('/:id', (req, res) => {
    db.Inspection.findByIdAndDelete(req.params.id)
        .then(inspection => {
            if(inspection !== null) {
                res.status(200).json({
                    message: 'Inspection deleted successfully'
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
});

module.exports = inspections