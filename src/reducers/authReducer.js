import {LOG_IN, SIGN_UP, LOG_OUT, GET_USER} from '../actions/types';

const initialState = {
  loading:true,
  // items: [],
  // item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case LOG_IN:
      console.log('INSIDE LOG IN REDUCER', action)
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case SIGN_UP:
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default: 
      return {...state,
      loading: false}
  }
}