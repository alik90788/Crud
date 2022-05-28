const express = require('express')
const mongoose = require('mongoose')
const crud = mongoose.model('Crud')

const router = express.Router()

router.post('/add', (req, res) => {
    crud.insertMany(req.body, (err, response) => {
        if(!err) console.log('Inserted!')
        else console.log(err)
    })
})

router.get('/all', (req, res) => {
    crud.find((err, response) => {
        if(!err) res.send(response)
        else console.log(err)
    })
})

router.get('/:email', (req, res) => {
    crud.findOne({ email: req.params.email }, (err, response) => {
        if(!err) res.send(response)
        else console.log(err)
    })
})

router.put('/change/:email', (req, res) => {
    var oldquery = { email: req.params.email }
    var newquery = { $set: { name: req.body.name, email: req.body.email } }
    crud.updateOne(oldquery, newquery, (err, response) => {
        if(!err) console.log('Changed!!')
        else console.log(err)
    })
})

router.delete('/delete/:email', (req, res) => {
    var query = { email: req.params.email }
    crud.deleteOne(query, (err, response) => {
        if(!err) console.log('Deleted!!')
        else console.log(err)
    })
})

module.exports = router