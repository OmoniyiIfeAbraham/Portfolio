const express = require('express')
const app = express()
const mongoose= require('mongoose')
const session = require('express-session')
const dotenv = require('dotenv')
dotenv.config()

const indexRouter = require('./routes/index')
const messageMod = require('./models/messageMod')
const adminRouter = require('./routes/admin')

const PORT = process.env.PORT || 2000

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    if (res) {
        console.log('Database connected succesfully')
        app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`))
    }
}).catch((err) => {
    console.log(err)
})

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/admin', adminRouter)