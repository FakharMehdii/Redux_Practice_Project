import React from 'react';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import store from './store/index'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
