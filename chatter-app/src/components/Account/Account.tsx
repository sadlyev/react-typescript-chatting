
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {ChatControl} from "../ChatComponents/ChatControl/ChatControl"
import "./Account.css"
import { ProjectNews } from "../NewsControl/ProjectNews/ProjectNews"
import {NewsList} from "../NewsControl/ProjectNewsList/ProjectNewsList"

export const Account = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ChatControl/>}></Route>
            <Route path="/chat" element={<ChatControl/>}></Route>
            <Route path="/news" element={<NewsList/>}></Route>
            <Route path="/news/:newsId" element={<ProjectNews/>}></Route>
        </Routes>
        </BrowserRouter>
       
    )
}