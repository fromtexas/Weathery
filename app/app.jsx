import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import css from './style.scss'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {configure} from 'configureStore'

import Main from 'Main'



let store = configure();





ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,document.getElementById('app'));
