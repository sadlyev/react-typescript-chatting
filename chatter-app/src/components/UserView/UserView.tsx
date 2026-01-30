export const UserView = ({username} : {username: string}) => {
    return (
        <div>
            <span>{username[0].toLocaleUpperCase()}</span>
        </div>
    )
}