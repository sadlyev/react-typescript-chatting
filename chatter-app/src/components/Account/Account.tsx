
import { BrowserRouter} from "react-router-dom"
import "./Account.css"
import { lazy} from "react"
const LazyChatControl = lazy(() => import("../ChatComponents/ChatControl/ChatControl"))
import type {FC } from "react"


export const Account: FC = () => {

    return (
        <BrowserRouter>
            <LazyChatControl/>
        </BrowserRouter>
       
    )
}