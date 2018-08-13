//dependencies
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8001;

//mongoose connection
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }).then( 
  () => { 
    console.log('success')
  },
  (err) => {
    throw err
})

//routes

//middleware
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(methodOverride('_method'));
server.set('view engine', 'html');

//allow CORS Figure out another way
// server.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//routes assignment
server.use((req, res)=> {
  res.send("<h1>hello!</h1>")
})

//error catcher
server.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send('ERROR:' + err);
  };
});

//server listen
server.listen(PORT);


module.exports = server;