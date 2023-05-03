const { MongoClient } = require('mongodb');

let dbConnection
let url = 'mongodb://127.0.0.1/cruds'

const connectToDb = (cb) => {
     MongoClient.connect(url)
     .then((client) => {
          dbConnection = client.db()
          return cb()
     })
     .catch((err) => {
          console.log(err);
          return cb(err);
     });
}

const getDb = () => dbConnection;


module.exports = {
  connectToDb, getDb
}