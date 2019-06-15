const express = require('express');
const router = express.Router();

const db = require('../db.js');

// get all posts
// router.get('/posts', (req, res) => {
//   db.getPosts()
//     .then(posts => {
//       res.json({posts});
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR:' + err.message);
//     });
// });

router.get('/posts/:category', (req, res) => {
    db.getCategory(req.params.category)
      .then(posts => res.json({posts}))
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message);
      });
  });

// get post by path
router.get('/posts/id/:post_id', (req, res) => {
  db.getPost(req.params.post_id)
    .then(post => res.json({post}))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message);
    });
});

module.exports = router;
