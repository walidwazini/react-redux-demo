import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import ReduxStore from './store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={ReduxStore} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);