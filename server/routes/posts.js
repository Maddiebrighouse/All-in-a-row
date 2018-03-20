const express = require('express')
const router = express.Router()

const db = require('../db.js')

// get all posts
router.get('/index', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.render('index', {posts})
    }
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.get('/posts/:id', (req, res) => {
    db.getMongoPost(req.params.id)
      .then(post => res.json({post}))
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

module.exports = router
