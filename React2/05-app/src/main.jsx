import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider><App/></CartProvider>
  </StrictMode>,
)
