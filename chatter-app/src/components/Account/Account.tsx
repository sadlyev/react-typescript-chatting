
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {ChatControl} from "../ChatComponents/ChatControl/ChatControl"
import "./Account.css"

export const Account = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ChatControl/>}></Route>
        </Routes>
        </BrowserRouter>
       
    )
}