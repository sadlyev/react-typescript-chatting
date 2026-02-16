import { useSearchParams } from "react-router-dom"
import { NewsPost } from "../../../api/news" 
import { Link } from "react-router-dom"
import "./ProjectNewsList.css"
import { AppHeader } from "../../CommonComp/Appheader/AppHeader"

 const NewsList = () => {
    const [searhParams, setSearchParams] = useSearchParams()

    function  handleSearch(e: any) {
        const {value } = e.target

        setSearchParams({search: value})
    }

    const search = searhParams.get("search") || ""

    const filteredNews = NewsPost.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase()))
  

    return (
        <div className="news">
            <AppHeader></AppHeader>
            <input onChange={handleSearch}></input>
            {filteredNews.map((post, i) => (
                <Link key={i} to={`/news/${i}`}>{
                    <div>
                        <p>{post.title}</p>
                        <p>{post.text}</p>
                    </div>
                }</Link>
            ))}
        </div>
    )
}

export default NewsList