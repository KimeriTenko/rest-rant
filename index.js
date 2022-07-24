/*Globals and Modules*/
require('dotenv').config()
const express = require('express')
const app = express()

/*Express Settings*/
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

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
app.listen(process.env.PORT)





/*GET   /places   Index page listing all places/*

/*POST   /places   Create a new place*/

/*GET   /places/:id   Show page containing details for a specific place (including a comment form to post rants)*/

/*GET   /places/:id/edit   Edit form for a place*/

/*PUT   /places/:id   Make changes to an existing place*/

/*DELETE   /places/:id   Delete an existing place*/

/*POST   /places/:id/rant   Post a rant (comment) about a specific place*/

/*DELETE    /places/:id/rant/:id    Delete an existing rant (comment)*/ 