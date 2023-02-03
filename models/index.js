const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI;

// Connect to MONGODB
mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if(err){ 
        console.log(err) 
    }else{
        console.log('Connected to ' + connectionString)
    }
});

module.exports.Inspection = require('./inspection')