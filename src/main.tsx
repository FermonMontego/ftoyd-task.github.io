import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import App from './App.tsx'
import MatchesProvider from './context/matches/Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MatchesProvider>
      <App />
    </MatchesProvider>
  </StrictMode>
)
