import React from 'react';
import ReactDOM from 'react-dom/client';


import {App} from './components/App/App.jsx';
import reportWebVitals from './reportWebVitals.js';
import {Provider} from 'react-redux'
import { store} from './redux/store'
// import {persistor, store } from 'redux/store';
// import scss from './index.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
