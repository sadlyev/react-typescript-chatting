
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./Account.css"
import { ProjectNews } from "../NewsControl/ProjectNews/ProjectNews"
import {NewsList} from "../NewsControl/ProjectNewsList/ProjectNewsList"
import { lazy , Suspense} from "react"
const LazyChatControl = lazy(() => import("../ChatComponents/ChatControl/ChatControl"))
import type {FC } from "react"

export const Account: FC = () => {

    return (
        <BrowserRouter>
        <Suspense >
         <Routes>
            <Route path="/" element={<LazyChatControl/>}></Route>
            <Route path="/news" element={<NewsList/>}></Route>
            <Route path="/news/:newsId" element={<ProjectNews/>}></Route>
        </Routes>
        </Suspense>
       
        </BrowserRouter>
       
    )
}