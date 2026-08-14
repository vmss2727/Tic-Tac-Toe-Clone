import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TicTacToe } from './TicTacToe.jsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicTacToe />
    <Analytics />
  </StrictMode>,
)
