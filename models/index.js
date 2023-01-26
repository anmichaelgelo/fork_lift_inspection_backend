const mongoose = require('mongoose')
const connectionString = process.env.MONGO_URI;

// Connect to MONGODB
mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if(err){ 
        console.log(err) 
    } else{ 
        console.log('connected to ' + connectionString)
    }
});

module.exports.DailyChecklist = require('./daily_checklist')
module.exports.Item = require('./items')
module.exports.DefectiveItem = require('./defective_item')