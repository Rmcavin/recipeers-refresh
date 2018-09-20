import {LOG_IN, SIGN_UP, LOG_OUT, GET_USER} from './types';
import axios from 'axios';
import { auth } from '../firebase';

export function getUser() {
  return (dispatch) => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER, 
        payload: user
      })
    })
  }
}

// logs an existing user into firebase auth
export function logIn(email, password) {
  console.log('INSIDE LOG IN ACTION', email, password)
  return (dispatch) => auth.signInWithEmailAndPassword(email, password);
}

// signs an existing user out of firebase auth
export function logOut() {
  return (dispatch) => auth.signOut();
}