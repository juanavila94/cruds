const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { connectToDb, getDb } = require('./db');
const customerRouter = require('./routes/crudRoutes');

const server = express();
server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(morgan('dev'));

let db
connectToDb(() => {
          server.listen(3001, ()=>{
               console.log('Connected on port 3001');
          })
          db = getDb();
});


server.use('/customers', customerRouter)



