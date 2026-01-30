import type {HTMLAttributes, FC, ReactNode} from "react"

interface ButtonFieldProps extends HTMLAttributes<HTMLButtonElement> {
    isLoading: boolean,
    type: "submit" | "reset" | "button"
    children: ReactNode
}
    


export const ButtonField: FC<ButtonFieldProps> = ({isLoading, type, children, className}) => {
    return (
        <button
        type={type}
        className={className}
        >{isLoading ? <span>Загрузка...</span> : children}</button>
    )
}