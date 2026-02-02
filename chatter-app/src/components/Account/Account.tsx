import {AppHeader} from "../Appheader/AppHeader"
import { TextViewList } from '../TextViewList/TextViewList'
import { SearchField } from "../SearchField/SearchField"
import "./Account.css"

export const Account = () => {

    return (
        <div className={"account"}>
            <AppHeader/>
            <div className="account_messages">
        <TextViewList/>
            </div>
            
            <SearchField/>
        </div>
    )
}