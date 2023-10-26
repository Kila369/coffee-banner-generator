import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {  CoffeeProvider } from './contexts/coffee.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffeeProvider>
        <App />
      </CoffeeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
