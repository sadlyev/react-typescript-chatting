import { UserView } from "../UserView/UserView";
import "./TextView.css"

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
  });
};
   

export const TextView = ({ username, text, timing}: {text: string, username: string, timing: number}) => {
    return (
        <div className="textview_wrapper">
            <UserView username={username}/>
            <div className="textview_sm">
                <div className="textview_inner"><span>{username}</span><span>{formatDate(timing)}</span></div>
                <p className="tetview_text">{text}</p>
            </div>
        </div>
    )
}