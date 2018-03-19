const knex = require('kenx')
const config = require('../knexfile').development

const db = knex(config)

function getPosts (testDb) {
    const conn = testDb || db
    return conn('users')
      .join('posts', 'posts.user_id', 'users.id')
      .select('users.name', 'posts.title', 'posts.id')
  }

  module.exports = {
      getPosts
  }