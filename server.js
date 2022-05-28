const express = require('express')
const bodyparser = require('body-parser')
require('./models/db')

const app = express()

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

const Crud = require('./routers/routes')

app.listen(3000, () => {
    console.log('Server!!')
})

app.use('/crud', Crud)