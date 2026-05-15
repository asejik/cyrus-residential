/**
 * main.tsx – Application entry point
 *
 * React 19 strict mode is enabled (design.md §3 – TypeScript Strict Mode).
 * Strict mode renders components twice in development to surface side-effects.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    '[main] Could not find #root element. Check index.html.',
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
