//firebase 
const fb = require('firebase');
// Initialize Firebase for the application
const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  };
fb.initializeApp(config);

module.exports = fb;