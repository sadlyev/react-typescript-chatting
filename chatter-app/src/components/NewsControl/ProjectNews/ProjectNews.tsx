import type {NewsType} from "../../../TTypes/TTypes"

export const ProjectNews = ({id, title, tags, text} : NewsType)=> {
    return (
        <div>
            <span>{title}</span>
            <ul>{tags.map((tag, i) => (
                <li key={i}>{tag}</li>
            ))}</ul>
            <p>{text}</p>

        </div>
    )
}