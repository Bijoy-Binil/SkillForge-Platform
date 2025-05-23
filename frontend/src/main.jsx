import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './Context/AuthContext';
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
    <App />
    </AuthProvider>
    </Router>
    
  </StrictMode>,
)
