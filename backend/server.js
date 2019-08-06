const express = require('express')
const app = express()
const Transaction = require('./TransactionSchema')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Bank', { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.post('/transaction', function (req, res) {
    const newTransaction = req.body
    let t1 = new Transaction(newTransaction)
    t1.save()
    res.end()
})

app.get('/transactions', function (req, res) {
    Transaction.find({}).exec(function (err, transactions) {
        res.send(transactions)
    })
})

const port = 8080
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})