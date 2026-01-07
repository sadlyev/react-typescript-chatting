import { HeaderApp } from "./Header";

type NavigateProps = {
    arg?: string
}
export const  NavigateApp = ({arg = "user"} : NavigateProps)  => {
    
    switch (arg) {
        case "user":
            return <HeaderApp/>
        case "admin": 
        return <HeaderApp/>

    }
}