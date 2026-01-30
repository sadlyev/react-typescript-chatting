import { UserView } from "../UserView/UserView";
import "./TextView.css"

 const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
};
   

export const TextView = ({ username, text}: {text: string, username: string}) => {
    return (
        <div className="textview_wrapper">
            <UserView username={username}/>
            <div className="textview_sm">
                <div className="textview_inner"><span>{username}</span><span>{formatDate(Date.now())}</span></div>
                <p className="tetview_text">{text}</p>
            </div>
        </div>
    )
}