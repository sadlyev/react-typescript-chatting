import { UserView } from "../UserView/UserView";

 const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
   

export const TextView = ({ username, text}: {text: string, username: string}) => {
    return (
        <div>
            <UserView username={username}/>
            <div>
                <div><span>{username}</span><span>{formatDate(Date.now())}</span></div>
                <p>{text}</p>
            </div>
        </div>
    )
}