import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { createStore } from 'redux'
import { render } from '@testing-library/react';
import rootReducer from './Reducer/index'


const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
