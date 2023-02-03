const mongoose = require('mongoose')

// Create Schema
let inspectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: '' },
    lift: { type: String, required: true },
    hours: { type: String, required: true },

    // Maintenance
    tires: { type: Boolean, required: true },
    horn: { type: Boolean, required: true },
    battery: { type: Boolean, required: true },
    controls: { type: Boolean, required: true },
    brakes: { type: Boolean, required: true },
    steering: { type: Boolean, required: true },
    hydraulics: { type: Boolean, required: true },
    overhead_guard: { type: Boolean, required: true },
    charger: { type: Boolean, required: true },
    fall_arrest: { type: Boolean, required: true },
    is_load_plate_displayed: { type: Boolean, required: true },
    is_operators_manual_present: { type: Boolean, required: true },
    is_forklift_clean: { type: Boolean, required: true },
    deficiencies_present: { type: String, default: "" }
}, { timestamps: true })

module.exports = mongoose.model('Inspection', inspectionSchema)