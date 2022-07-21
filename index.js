require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

/*GET   /Homepage*/
app.get('/', (req, res) => {
    res.sender('home')
})

/*GET 404 Page*/
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page does not exist</h1>')
})

app.listen(process.env.PORT)





/*GET   /places   Index page listing all places/*

/*GET   /places/new   Form to create a new place*/

/*POST   /places   Create a new place*/

/*GET   /places/:id   Show page containing details for a specific place (including a comment form to post rants)*/

/*GET   /places/:id/edit   Edit form for a place*/

/*PUT   /places/:id   Make changes to an existing place*/

/*DELETE   /places/:id   Delete an existing place*/

/*POST   /places/:id/rant   Post a rant (comment) about a specific place*/

/*DELETE    /places/:id/rant/:id    Delete an existing rant (comment)*/ 