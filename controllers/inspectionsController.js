const db = require('../models')
const { Inspection } = db

// Get all inspections
exports.getAllInspection = (req, res, next) => {
    Inspection.findAll()
        .then(data => {
            res.send({
                message: '',
                data,
            })

            return next()
        })
        .catch(error => {
            res.send({
                message: error
            })
        })
}

// Get inpection by Id
exports.getInspectionById = (req, res, next) => {
    Inspection.findByPk(parseInt(req.params.id))
        .then(data => {
            if(data !== null) {
                res.send({
                    message: '',
                    data
                })
            }else{
                res.send({
                    message: 'No record found',
                    data: {}
                })
            }

            return next()
        })
        .catch(error => {
            res.send({
                message: error
            })
        })
}

// Creat a new record
exports.createInspection = (req, res, next) => {
    const inputs = req.body;
    Inspection.create(inputs) // * No Validation here yet
        .then(data => {
            res.send({
                message: 'Inspection added successfully'
            })
    
            return next()
        })
        .catch(error => {
            res.send({
                message: error
            })
        })
}

exports.updateInspection = (req, res, next) => {
    Inspection.update(req.body, {
        where: {id: req.params.id}
    }).then(data => {
        res.send({
            message: 'Inspection updated successfully'
        })

        return next()
    }).catch(error => {
        res.send({
            message: error
        })
    })
}

exports.deleteInspection = (req, res, next) => {
    Inspection.destroy({
        where: { id: req.params.id }
    }).then(data => {
        res.send({
            message: 'Inspection deleted successfully'
        })

        return next()
    }).catch(error => { 
        res.send({
            message: error
        })
    })
}