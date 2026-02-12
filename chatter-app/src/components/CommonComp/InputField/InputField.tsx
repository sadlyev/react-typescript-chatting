import type { ReactNode, FC } from "react"

interface INputFeildProps {
    children: ReactNode
}

export const InputField:FC<INputFeildProps> = ({ children}) => {
    return (
        <label>
            {children}
        </label>
    )
}