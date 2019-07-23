import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './view/index';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const globalState = {
  totalCount: 1
}

//buat reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === 'INCREASE_COUNT') {
    return {
      ...state,
      totalCount: state.totalCount + 1
    }
  }
  if(action.type === 'DECREASE_COUNT') {
    if (state.totalCount > 0) {
      return {
        ...state,
        totalCount: state.totalCount - 1
      }
    }
  }
  return state
}

//Buat storenya
const storeGlobal = createStore(rootReducer)

ReactDOM.render(<Provider store={storeGlobal}><Index /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
