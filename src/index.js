import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
