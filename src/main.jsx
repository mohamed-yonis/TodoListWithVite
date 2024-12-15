import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import Home from './assets/Home';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
