import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let defaultData = [
  { id : 1, name : 'Red Knit', quan : 2 },
  { id : 0, name : 'White and Black', quan : 1 },
  { id : 3, name : 'Flowey', quan : 3 }  
]

function reducer(state = defaultData, action) {
  if (action.type === 'addItem') {
      let item = action.payload.findId;
      console.log(action.payload);
      let newState = [...state];
        newState.push({
          id : item.id,
          name : item.title,
          quan : 1
        })
        return newState;
    } else if (action.type === 'plus') {
      let id = action.payload.id.idx;
      let newState = [...state];
      newState[id].quan++;
      return newState;
    } else if (action.type === 'minus'){
      let id = action.payload.id.idx;
      let newState = [...state];
      if (newState[id].quan > 0) {
        newState[id].quan--;
      }
      return newState;
    } else {
      return state;
    }
}

let defaultAlert = true;

function reducer2(state = defaultAlert, action) {
  if (action.type === 'close') {
    state = false;
    return state;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
