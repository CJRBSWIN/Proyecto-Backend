require ('dotenv').config()
const express = require('express')
const cookieParser = require('./node_modules/cookie-parser')
const db = require('./configs/db')
const errors = require('./misc/errors')


const PORT = 4000
const app = express()

app.use(express.json())
app.use(cookieParser())

const routes = require('./routes')

app.use(routes(db))

app.use((req, res, next) => {
    next(errors[404])
})

app.use(({statusCode, error}, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

app.use (() => {
    console.log('Soy un middleware')
})

app.listen(
    process.env.PORT,
    () => console.info(`> listening at: ${process.env.PORT}`)
)