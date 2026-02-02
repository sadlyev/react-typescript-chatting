import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Account} from "./components/Account/Account"




import "./main.css"

createRoot(document.querySelector('.root')!).render(
  <StrictMode>

      <Account/>
    
    
  </StrictMode>,
)
