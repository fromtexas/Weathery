import {ADD_WEATHER} from '../constants/actionTypes'; 

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case ADD_WEATHER:
      return [...state, action.payload];
    default:
      return state;
  }
}
