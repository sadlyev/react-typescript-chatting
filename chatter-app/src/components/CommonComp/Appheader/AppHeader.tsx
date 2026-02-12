import "./AppHeader.css"

export type AppHeaderprops = {
    title?: string;
    description?: string
}

export const AppHeader = ({title, description}: AppHeaderprops) => {
    return (
        <header className="header">
            <svg className="header_logo" width="20" height="20"><use href="/public/sprite.svg#users-icon"></use></svg>
            <div className="header_wrapper">
                <span className="header_title">{title ? title : "Global Chatter"}</span>
                <p className="header_description">{description ? description : "Public message board"}</p>
            </div>
        </header>
    )
}