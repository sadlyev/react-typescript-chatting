import "./UserView.css"

export const UserView = ({username} : {username: string}) => {
    const colors: string[] = ["red", "blue", "green", "orange"]

    return (
            <span className="user_logo-letter" style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}>{username[0].toLocaleUpperCase()}</span>
    )
}