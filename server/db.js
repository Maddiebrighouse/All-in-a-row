// const knex = require('knex')
// const config = require('../knexfile').development

// const devdb = knex(config)

// function getPosts (testDb) {
//     const db = testDb || devdb
//     return db('entries')
//       .select()
//   }

//   module.exports = {
//       getPosts
//   }
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://${process.env.USERNAMEDB}:${process.env.PASSWORDDB}@blogdb-3towu.mongodb.net/test?retryWrites=true&w=majority`

module.exports = {
    getPosts: (values) => {
      return MongoClient.connect(uri, {useNewUrlParser: true})
        .then(client => {
          const db = client.db('AllInARow')
          return db.collection('Posts')
            .find(values)
            .toArray()
            .then(output => output)
            .then((output) => {
              client.close()
              return output
            })
        })
    },

    getPost: (values) => {
        return MongoClient.connect(uri)
          .then(client => {
            const db = client.db('AllInARow')
            return db.collection('Posts')
              .find(values.posts[0].post_id)
              .toArray()
              .then(output => output)
              .then((output) => {
                client.close()
                return output
              })
          })
      }
}