import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeaderApp } from './react-components/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderApp/>
  </StrictMode>,
)

