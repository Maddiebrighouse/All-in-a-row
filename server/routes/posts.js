const express = require('express')
const router = express.Router()

const db = require('../db.js')

// get all posts
router.get('/posts', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json({posts})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.get('/posts/category', (req, res) => {
    db.getCategory(req.params.category)
      .then(post => res.json({post}))
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

// get post by id
router.get('/posts/:id', (req, res) => {
  db.getPost(req.params.id)
    .then(post => res.json({post}))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
