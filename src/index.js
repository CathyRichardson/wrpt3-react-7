import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWithHooks from './AppWithHooks';
import CounterApp from './CounterApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppWithHooks/>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

