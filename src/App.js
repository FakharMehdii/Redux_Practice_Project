import './App.css'

import {Homepage} from './Components/Homepage/index'
import '@fortawesome/fontawesome-free/css/all.min.css';

import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
     <Homepage  />    
    </Provider>
  );
}

export default App;