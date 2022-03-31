import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let defaultData = []

function reducer(state = defaultData, action) {
  if (action.type === 'addItem') {
    let item = action.payload.findId;
    // console.log(action.payload);
    let newState = [...state];
    let found = state.findIndex((data)=>{ return data.id === item.id});

    if (found >= 0) {
      newState[found].quan++;
      return newState;
    } else {

        newState.push({
          id : item.id,
          name : item.title,
          quan : 1
        })
        return newState;
    }

    } else if (action.type === 'plus') {
      let id = action.payload;
      // console.log(id);
      let newState = [...state];
      newState[id].quan++;
      return newState;
    } else if (action.type === 'minus'){
      let id = action.payload;
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

let defaultCounter = 2;

function reducer3(state = defaultCounter, action) {
  if (action.type === 'clicked') {
    state++;
    return state;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2, reducer3 }));

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
