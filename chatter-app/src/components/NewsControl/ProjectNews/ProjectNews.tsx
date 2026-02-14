import { useParams } from "react-router-dom"
import { NewsPost } from "../../../api/news" 
import { useEffect } from "react"

export const ProjectNews = ()=> {

    const {newsId} = useParams()

    

     console.log(newsId)

    let news = NewsPost[Number(newsId)]
    console.log(news)

if (!news) {
    return (<div>no such a new </div>)
} else {
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
    
}