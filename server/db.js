const knex = require('knex')
const config = require('../knexfile').development

const devdb = knex(config)

function getPosts (testDb) {
    const db = testDb || devdb
    return db('entries')
      .select()
  }

  module.exports = {
      getPosts
  }