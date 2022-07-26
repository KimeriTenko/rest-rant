/*Globals and Modules*/
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

/*Express Settings*/
// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

/*Controllers and Routes*/
app.use('/places', require('./controllers/places'))

/*GET places*/
app.use('/places', require('./controllers/places'))

/*GET   /Homepage*/
app.get('/', (req, res) => {
    res.render('home')
})

/*GET 404 Page*/
app.get('*', (req, res) => {
    res.render('error404')
})

/*Listen for Connections*/
// app.listen(process.env.PORT)
app.set('port', process.env.PORT || 3000);