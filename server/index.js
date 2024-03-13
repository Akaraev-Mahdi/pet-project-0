const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const ErrorMid = require('./middleware/ErrorMid')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(ErrorMid)

const start = async ()=> {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5000, ()=> console.log('server start'))
    } catch (error) {
        console.log(error)
    }
}

start()