const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Crud', { useNewUrlParser: true }, (err) => {
    if(!err)
        console.log('Connection Succeeded...');
    else
        console.log(err);
})

require('./crud.model')