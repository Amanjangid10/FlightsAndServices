const express = require('express')
const {PORT}= require('./config/serverConfig')
const bodyParser = require('body-parser')


const ApiRoutes = require('./routes/index')


const SetupAndStartServer = async () => {
    
    const app = express();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))




  
    app.use( '/api', ApiRoutes)

    app.listen(PORT, async() => {
        console.log(`Server is running on port ${PORT}`)
    });
}

SetupAndStartServer()