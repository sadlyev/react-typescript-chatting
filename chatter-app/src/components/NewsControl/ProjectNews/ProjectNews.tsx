import { useParams } from "react-router-dom"
import { NewsPost } from "../../../api/news" 
import { useEffect } from "react"
import { AppHeader } from "../../CommonComp/Appheader/AppHeader"

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
            <AppHeader></AppHeader>
            <span>{news.title}</span>
            <ul>{news.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
            ))}</ul>
            <p>{news.text}</p>

        </div>
    )
}
    
}