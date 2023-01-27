const mongoose = require('mongoose')

// Create Schema
let dailyChecklistSchema = new mongoose.Schema({
    truck_no: { type: Number, required: true },
    building_no: { type: Number, required: true },
    shift: { type: String, default: '' },
    is_internal_combustion: { type: Boolean, default: false},
    is_electric: { type: Boolean, default: false},
    hour_meter: { type: Object, default: { 
        start: "", 
        end: "", 
        total_hours: "" 
    }},
    operated_by: { type: String, required: true },
    supervised_by: { type: String, required: true },
    defective_items: [{ // Reference DefectiveItem Model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DefectiveItem'
    }]
}, { timestamps: true })

// Create Model from Schema
const DailyChecklist = mongoose.model('DailyChecklist', dailyChecklistSchema)

module.exports = DailyChecklist