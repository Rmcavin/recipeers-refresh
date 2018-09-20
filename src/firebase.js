import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCHd0ja08PuRGPIfYxsu2pWG9bJApw_il8",
    authDomain: "recipeers-redo.firebaseapp.com",
    databaseURL: "https://recipeers-redo.firebaseio.com",
    projectId: "recipeers-redo",
    storageBucket: "recipeers-redo.appspot.com",
    messagingSenderId: "470148932827"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('recipeers-redo/');
export const auth = firebase.auth();