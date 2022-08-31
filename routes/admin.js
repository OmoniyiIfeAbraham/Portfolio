const express = require('express')
const router = express.Router()

const messageMod = require('./../models/messageMod')

router.get('/', (req, res) => {
    res.redirect('/admin/login')
})

router.get('/login', (req, res) => {
    res.render('login', { msg: "", msg1: "" })
})

router.post('/loginKey', async (req, res) => {
    var key = 'youOwemE'
    var secretKey = req.body.secretKey
    var msg = "Input Key"
    var msg1 = "Wrong key"
    if(secretKey == "") {
        res.render('login', {msg, msg1: ""})
    } else {
        if (secretKey == key) {
            let messages = await messageMod.find()
            res.render('admin', {messages})
        } else {
            res.render('login', {msg: "", msg1})
        }
    }
})

module.exports = router