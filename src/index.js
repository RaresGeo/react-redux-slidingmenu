import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import store from './store'

const generateColour = () => {
  let newColour = []
  for(let i = 0; i < 3; i ++) {
    newColour.push(Math.floor((Math.random() * 255) + 1))
  }
  return newColour
}

const columns = 3
const rows = 3

let matrix = []

for(let i = 0; i < rows; i ++) {
  let newRow = []
  for(let j = 0; j < columns; j ++) {
    let newColumn = generateColour()
    newRow.push('(' + newColumn.join(',') + ')')
  }
  matrix.push(newRow)
}


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App matrix={matrix}/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
