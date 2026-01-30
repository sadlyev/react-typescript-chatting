import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppHeader} from "./components/Appheader/AppHeader"
import { TextView } from './components/TextView/TextView'
import { TextViewList } from './components/TextViewList/TextViewList'

import "./main.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHeader />
  <TextView username={"Asilbek"} text={"im here for the first time"}/>
  <TextViewList/>
  </StrictMode>,
)
