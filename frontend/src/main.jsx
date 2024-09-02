import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
ReactDOM.createRoot(document.getElementById('root')).render(
  //Rapping the whole app inside React Router 
  <BrowserRouter>       
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
)
