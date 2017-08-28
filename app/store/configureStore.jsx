import * as redux from 'redux'
import thunk from 'redux-thunk'
import {weatherReducer} from 'reducers';

export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    weather: weatherReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
