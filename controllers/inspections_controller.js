const app = require('express').Router()
const db = require('../models')
const { Inspection } = db

// INDEX
app.get('/', async (req, res) => {
    try {
        const getInspections = await Inspection.findAll()

        res.status(200).json({
            data: getInspections,
            message: '',
        })

    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});

// STORE
app.post('/', async (req, res) => {
    try {
        await Inspection.create(req.body) // * No Validation here yet

        res.status(200).json({
            message: 'Inspection added successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});

// SHOW
app.get('/:id', async (req, res) => {
    try {
        const findInpsection = await Inspection.findByPk(req.params.id)

        if(findInpsection !== null) {
            res.status(200).json({
                message: '',
                data: findInpsection
            })
        }else{
            res.status(404).json({
                message: 'No record found',
                data: {}
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});

// UPDATE
app.put('/:id', async (req, res) => {
    try {
        await Inspection.update(req.body, {
            where: {id: req.params.id}
        })

        res.json({
            message: 'Inspection updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
});

// DELETE
app.delete('/:id', async (req, res) => {
    try {
        await Inspection.destroy({
            where: { id: req.params.id }
        })

        res.status(200).json({
            message: 'Inspection deleted successfully'
        })

    } catch (error) {
        res.status(500).json({
            message: error
        })   
    }
});

module.exports = app