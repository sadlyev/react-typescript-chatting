import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../QueryClient"
import { FetchTextViewList } from "../../api/notes"
import { TextView } from "../TextView/TextView"

export const TextViewList = () => {
    const myQuery = useQuery({
        queryKey: ["notes"],
        queryFn: () => FetchTextViewList() 
    },
queryClient)

    switch(myQuery.status) {
        case "success": 
        return (
            <ul>
               {myQuery.data.map((note) => (
                <li><TextView username={note.name} text={note.text}/></li>
               ))} 
            </ul>
        )
    }
}