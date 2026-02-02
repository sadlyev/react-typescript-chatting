import {AppHeader} from "../Appheader/AppHeader"
import { TextViewList } from '../TextViewList/TextViewList'
import {InputField} from "../InputField/InputField"
import { useState } from "react"

export const Account = () => {

    const [nameState,  setNameState] = useState("")
    const [textState,  setTextState] = useState("")

    function handleNameInput(e: string) {
        return setNameState(e)
    }

    function handleTextInput(e: string) {
        return setTextState(e)
    }
    return (
        <div>
            <AppHeader/>
            
            <InputField>
            <input placeholder="Your Name..." value={nameState} onChange={(e) => handleNameInput(e.currentTarget.value)}></input></InputField>
            <InputField>
            <input placeholder="Type Your Message to Everyone..." value={textState} onChange={(e) => handleTextInput(e.currentTarget.value)}></input>
            </InputField>
        </div>
    )
}