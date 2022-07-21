/*Globals and Modules*/
require('dotenv').config()
const express = require('express')
const app = express()

/*Express Settings*/
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


/*Controllers and Routes*/

app.use('/places', require('./controllers/places'))

/*GET   /Homepage*/
app.get('/', (req, res) => {
    res.render('home')
})

/*GET 404 Page*/
app.get('*', (req, res) => {
    res.render('error 404')
})

/*GET   /places/new   Form to create a new place*/
app.get('/', (req, res) => {
    let places = [{
        let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: 'http://placekitten.com/250/250'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: 'http://placekitten.com/250/250'
          }]
          
    }]
    res.render('places/index')
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