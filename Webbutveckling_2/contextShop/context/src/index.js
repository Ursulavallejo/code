import React from 'react';
import ReactDOM from 'react-dom';
import './utils/data/global/global.css';
import App from './App';
import 'tachyons'
import reportWebVitals from './reportWebVitals';
import { StoreContextProvider } from './context/storeContext';

ReactDOM.render(
 <StoreContextProvider>
    <App />
 </StoreContextProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();