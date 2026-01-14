import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavigateApp } from './react-components/Navigation'
import {RegisterApp} from "./react-components/registration/LoginIn"
import "./styles.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegisterApp/>
  </StrictMode>,
)

