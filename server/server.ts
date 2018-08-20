//dependencies
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dotenv = require('dotenv').config();
//const path = require('path');
const PORT = process.env.PORT || 8001;
const firebase = require('./firebaseConfig')
const db = firebase.database();
const auth = firebase.auth();

//middleware
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(methodOverride('_method'));
server.set('view engine', 'html');

//routes
const authRoutes = require('./routes/auth.routes');

//allow CORS Figure out another way
server.use(function(req:any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes assignment
server.use('/auth', authRoutes);

server.use('/', (req:any, res:any)=> {
  res.send("testing!")
})

//error catcher
server.use(function(err:any, req:any, res:any, next:any) {
  if (err) {
    res.status(500).send('ERROR:' + err);
  };
});

//server listen
server.listen(PORT);

console.log('Running on port', PORT)


module.exports = server;