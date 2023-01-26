const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI;

// Connect to MONGODB
mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if(err){ 
        console.log(err) 
    }
});

module.exports.DailyChecklist = require('./daily_checklist')
module.exports.Item = require('./items')
module.exports.DefectiveItem = require('./defective_item')