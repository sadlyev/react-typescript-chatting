import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Account} from "./components/Account/Account"
import { TextViewList } from './components/TextViewList/TextViewList'


import "./main.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Account/>
    <TextViewList/>
    
  </StrictMode>,
)
