const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/register', (req, res, next) => {
    res.status(200).json({
        message: `Hello ${req.body.email} Your user was registered have fun!!`
    })
})

module.exports = app;