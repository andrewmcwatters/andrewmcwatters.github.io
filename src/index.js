import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
// Bootstrap and its default variables
import "./bootstrap.css";
import './index.css';
import './theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
), document.getElementById('root'));
registerServiceWorker();
