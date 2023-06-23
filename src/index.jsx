import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="tweets">
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);