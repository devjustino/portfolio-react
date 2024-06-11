import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/globals.scss';
import './styles/header.scss';
import './styles/input.css';

import './styles/media.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

