const express = require('express')
const router = express.Router()
const messageMod = require('./../models/messageMod')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const message = new messageMod({
            fullName: req.body.fullName,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        })
        await message.save()
        res.send("Submitted")
    } catch (err) {
        console.log(err)
    }
})

module.exports = router