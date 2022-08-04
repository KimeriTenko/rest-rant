const router = require('express').Router()
const db = require('../models/places.js')

/*GET /places*/
router.get('/', (req, res) => {
  db.Place.find()
      .then((places) => {
          res.render('places/index', { places })
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

/*POST   /places   Create a new place*/
router.post('/', (req, res) => {
  if (req.body.pic === '') { req.body.pic = undefined }
  if (req.body.city === '') { req.body.city = undefined }
  if (req.body.state === '') { req.body.state = undefined }
  db.Place.create(req.body)
      .then(() => {
          res.redirect('/places')
      })
      .catch(err => {
          if (err && err.name == 'ValidationError') {
              let message = 'Validation Error: '
              for (var field in err.errors) {
                  message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`
              }
              res.render('places/new', { message })
          }
          else {
              res.render('error404')
          }
      })
})

/*GET   /places/new*/
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

/*GET   /places/:id   Show page containing details for a specific place (including a comment form to post rants)*/
router.get('/:id', (req, res) => {
  db.Place.findOne({ _id: req.params.id })
      .populate('comments')
      .then(place => {
          console.log(place.comments)
          res.render('places/show', { place:places[id], id})
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

/*PUT   /places/:id   Make changes to an existing place*/
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

/*DELETE   /places/:id   Delete an existing place*/
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/places')
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

/*GET   /places/:id/edit   Edit form for a place*/
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { places: [id]})
      })
      .catch(err => {
          res.render('error404')
      })
})

/*POST   /places/:id/rant   Post a rant (comment) about a specific place*/
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
      .then(place => {
          db.Comment.create(req.body)
              .then(comment => {
                  place.comments.push(comment.id)
                  place.save()
                      .then(() => {
                          res.redirect(`/places/${req.params.id}`)
                      })
                      .catch(err => {
                          res.render('error404')
                      })
              })
              .catch(err => {
                  res.render('error404')
              })
      })
      .catch(err => {
          res.render('error404')
      })
})

/*DELETE    /places/:id/rant/:id    Delete an existing rant (comment)*/
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
          console.log('Success')
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)/865734
          res.render('error404')
      })
})

module.exports = router