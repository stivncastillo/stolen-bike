import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import store from './store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
