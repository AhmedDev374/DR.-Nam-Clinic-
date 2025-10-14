import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Detect if we're running on GitHub Pages (production build)
const PROD = import.meta.env.PROD === true
const BASE = PROD ? '/DR.-Nam-Clinic-/' : '/'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={BASE}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// --- Redirect to language selector on root path ---
const path = window.location.pathname
if (PROD) {
  const roots = ['/', '/DR.-Nam-Clinic-', '/DR.-Nam-Clinic-/']
  if (roots.includes(path)) {
    window.location.replace(`${BASE}select-language`)
  }
} else {
  if (path === '/') {
    window.location.replace('/select-language')
  }
}
