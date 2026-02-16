import { useSearchParams } from "react-router-dom"
import { NewsPost } from "../../../api/news" 
import { Link } from "react-router-dom"
import { ProjectNews } from "../ProjectNews/ProjectNews"
import { AppHeader } from "../../CommonComp/Appheader/AppHeader"

export const NewsList = () => {
    const [searhParams, setSearchParams] = useSearchParams()

    

    return (
        <div>
            <AppHeader></AppHeader>
            {NewsPost.map((post, i) => (
                <Link to={`/news/${i}`}>{
                    <div>
                        <p>{post.title}</p>
                        <p>{post.text}</p>
                    </div>
                }</Link>
            ))}

        </div>
    )
}