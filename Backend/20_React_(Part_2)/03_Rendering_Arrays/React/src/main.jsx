import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  {/* because of this strictMode our Props print twice as object in console */}
    <App />
  </StrictMode>,
)
