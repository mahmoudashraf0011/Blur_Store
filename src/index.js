import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  
   , root)
reportWebVitals();
