import express = require('express');
const router = express.Router()
const firebase = require('firebase');
const auth = firebase.auth();

router.post('/signIn', (req:any, res:any) => {
  console.log(req)
  auth.signInWithEmailAndPassword(req.body.email, req.body.password)
  .catch((err:any)=> res.status('404').end(err.message));

  auth.onAuthStateChanged((user:any) => {
    console.log(user)
    if (user) {
      res.end(user);
    } else {
      //res.end("Invalid Log In.");
    }
 })
})

router.post('/register', (req:any, res:any) => {
  // construct a new user
  function User(email:string, password:string, username:string) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.createdat = Date.now;
  }
  
  //auth.createUserWithEmailAndPassword(new (User as any)(req.body.email, req.body.password, req.body.username))
  auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
  .catch((err:any)=> res.status('404').end(err.message))
  console.log('hello from registration')

  auth.onAuthStateChanged((user:any) => {
    console.log(user)
    if (user) {
      res.end(JSON.stringify(user));
    } else {
      //res.end("Registration Failed.");
    }
 })
})

module.exports = router;