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
    // res.json(req.body.defective_items)
    db.DailyChecklist.create(req.body.daily_checklist)
        .then(createdChecklist => {

            db.DefectiveItem.create(req.body.defective_items)
                .then(item => {
                    createdChecklist.defective_items = item
                    createdChecklist.save()
                        .then(() => {
                            res.status(200).json({
                                message: 'Checklist added successfully'
                            })
                        })
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Defective Item error: ' + err.message
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Checklist error: ' + err.message
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
            // db.DefectiveItem.find({
            //     $where: () => {
            //         return (checklist.defective_items.id == DefectiveItem)
            //     }
            // })
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