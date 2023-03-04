const restify = require('restify')
const server = restify.createServer()

// Middleware / Config
require('dotenv').config()
server.use(restify.plugins.bodyParser());

// Controllers
const inspectionsController = require('./controllers/inspectionsController')
server.get('/api/v1/inspections', inspectionsController.getAllInspection)
server.get('/api/v1/inspections/:id', inspectionsController.getInspectionById)
server.post('/api/v1/inspections', inspectionsController.createInspection)
server.put('/api/v1/inspections/:id', inspectionsController.updateInspection)
server.del('/api/v1/inspections/:id', inspectionsController.deleteInspection)

// Root Index
server.get('/', (req, res, next) => {
    res.send({
        message: 'This only means that the backend is working properly!'
    })

    return next()
})
// Ends here

// 404 status
server.get('*', (req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'Page Not Found'
    })

    return next()
})

// listen to port
server.listen(process.env.PORT, () => {
    console.log('Connected to port ' + process.env.PORT)
})

module.exports = server