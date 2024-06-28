import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n.js';

import ProvideAppContext from './context/app.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvideAppContext>
      <App />
    </ProvideAppContext>
  </React.StrictMode>
);
