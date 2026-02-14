import { useParams } from "react-router-dom"
import { NewsPost } from "../../../api/news" 

export const ProjectNews = ()=> {

    const {newsId} = useParams()

    const news = NewsPost[Number(newsId)]


    return (
        <div>
            <span>{news.title}</span>
            <ul>{news.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
            ))}</ul>
            <p>{news.text}</p>

        </div>
    )
}