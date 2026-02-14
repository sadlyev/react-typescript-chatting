import { Link } from "react-router-dom";
import "./AppHeader.css"

export type AppHeaderprops = {
    title?: string;
    description?: string
}

export const AppHeader = ({title, description}: AppHeaderprops) => {
    return (
        <header className="header">
            <Link to={"/news"}>Новости</Link>
            <div className="header_wrapper">
                <span className="header_title">{title ? title : "Global Chatter"}</span>
                <p className="header_description">{description ? description : "Public message board"}</p>
            </div>
        </header>
    )
}