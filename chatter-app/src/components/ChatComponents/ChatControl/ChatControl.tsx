import {AppHeader} from "../../CommonComp/Appheader/AppHeader"
import { TextViewList } from '../TextViewList/TextViewList'
import { SearchField } from "../SearchField/SearchField"
import "./ChaTControl.css"

 const ChatControl = () => {
    return (
         <div className={"chat"}>
            <AppHeader/>
            <div className="chat_messages">
        <TextViewList/>
            </div>  
            <SearchField/>
        </div>
    )
}

export default ChatControl