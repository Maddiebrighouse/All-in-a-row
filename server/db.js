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
            .sort({post_date:-1})
            .toArray()
            .then(output => output)
            .then((output) => {
              client.close()
              return output
            })
        })
    },
      getPost: (id) => {
        return MongoClient.connect(uri, {useNewUrlParser: true})
          .then((err, client) => {
          if (err) alert('error:', err.message)
          const collection = client.db('AllInARow').collection('Posts')
          collection.find({'post_id': id}).toArray((err, post) => {
            if (err) alert('error:', err.message)
            return post
          })
          client.close()
        })
      },

      getCategory: (category) => {
        return MongoClient.connect(uri, {useNewUrlParser: true})
          .then((client) => {
          const db = client.db('AllInARow')
          return db.collection('Posts')
          .find({'category': `${category}`})
          .toArray()
          .then(categoryOutput => categoryOutput)
            .then((categoryOutput) => {
              client.close();
              return categoryOutput;
            })
          })
        }
  }
