
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./Account.css"
import { lazy , Suspense, useEffect} from "react"
const LazyChatControl = lazy(() => import("../ChatComponents/ChatControl/ChatControl"))
const LazyNewsList = lazy(() => import("../NewsControl/ProjectNewsList/ProjectNewsList"))
const LazyProjectNews = lazy(() => import("../NewsControl/ProjectNews/ProjectNews"))
import type {FC } from "react"


export const Account: FC = () => {

    useEffect(() => {
        
    }, [])

    return (
        <BrowserRouter>
        <Suspense >
         <Routes>
            <Route path="/" element={<LazyChatControl/>}></Route>
            <Route path="/news" element={<LazyNewsList/>}></Route>
            <Route path="/news/:newsId" element={<LazyProjectNews/>}></Route>
        </Routes>
        </Suspense>
       
        </BrowserRouter>
       
    )
}