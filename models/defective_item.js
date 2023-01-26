const mongoose = require('mongoose')

const defectiveItemSchema = new mongoose.Schema({
    items: { type: Array, default: [] },
    details: { type: String, default: '' }
})

const DefectiveItem = mongoose.model('DefectiveItem', defectiveItemSchema)

module.exports = DefectiveItem