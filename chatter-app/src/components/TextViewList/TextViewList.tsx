import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../QueryClient"
import { FetchTextViewList } from "../../api/notes"
import { TextView } from "../TextView/TextView"
import "./TextViewList.css"

interface NoteProps {
    id: number,
    name: string,
    text: string,
    timing: number
}

export const TextViewList = () => {
    const myQuery = useQuery({
        queryKey: ["notes"],
        queryFn: FetchTextViewList,
    },
queryClient)

    switch(myQuery.status) {
        case "success": 
        return (
            <ul className="notes_list">
               {myQuery.data.map((note: NoteProps) => (
                <li key={note.id}><TextView username={note.name} text={note.text} timing={note.timing}/></li>
               ))} 
            </ul>
        )
    }
}