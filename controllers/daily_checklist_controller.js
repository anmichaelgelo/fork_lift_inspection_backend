const checklist = require('express').Router()
const db = require('../models')

// INDEX
checklist.get('/', (req, res) => {
    db.DailyChecklist.find()
        .then(checklist => {
            if(checklist.length > 0) {
                res.status(200).json({
                    count: checklist.length,
                    data: checklist
                })
            }else{
                res.status(404).json({
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
checklist.post('/', (req, res) => {
    db.DailyChecklist.create(req.body.daily_checklist)
        .then(createdChecklist => {

            db.DefectiveItem.create(req.body.defective_items)
                .then(item => {
                    createdChecklist.defective_items = item.id;
                    createdChecklist.save()
                        .then(() => {
                            res.status(200).json({
                                message: 'Checklist added successfully'
                            })
                        })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
});

// SHOW
checklist.get('/:key', (req, res) => {
    db.DailyChecklist.findById(req.params.key)
        .populate('defective_items')
        .then(checklist => {
            if(checklist !== null) {
                res.status(200).json({
                    data: checklist
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
checklist.put('/:key', (req, res) => {
    db.DailyChecklist.findByIdAndUpdate(req.params.key, req.body.daily_checklist)
        .then(checklist => {
            if(checklist !== null) {
                res.json({
                    data: checklist,
                    message: 'Checklist updated successfully'
                })

                db.DefectiveItem.findByIdAndUpdate(checklist.defective_items, req.body.defective_items)
                    .then(() => {
                        res.status(200).json({
                            message: 'Checklist updated successfully'
                        })
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
checklist.delete('/:key', (req, res) => {
    db.DailyChecklist.findByIdAndDelete(req.params.key)
        .then(checklist => {
            if(checklist !== null) {
                db.DefectiveItem.findByIdAndDelete(checklist.defective_items)
                    .then(() => {
                        res.status(200).json({
                            message: 'Checklist deleted successfully'
                        })
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

module.exports = checklist