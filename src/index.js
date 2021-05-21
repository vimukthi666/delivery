import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import './index.css';
import DeliveryService from './components/delivery-service.component';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
       <DeliveryService/>
  </BrowserRouter>,
  document.getElementById('root')

);
reportWebVitals();
