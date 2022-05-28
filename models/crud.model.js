const mongoose = require('mongoose')

var CrudSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

mongoose.model('Crud', CrudSchema);