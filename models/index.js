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