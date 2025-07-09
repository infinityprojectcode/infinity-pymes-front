import AuthProvider from '@lib/auth/authProvider/AuthProvider';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>,
)
