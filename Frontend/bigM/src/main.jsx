import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import ShopContextProvider from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ShopContextProvider>

  </StrictMode>,
)
