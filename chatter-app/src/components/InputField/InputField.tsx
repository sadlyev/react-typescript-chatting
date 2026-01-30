import type { ReactNode, FC } from "react"

interface INputFeildProps {
    label: string,
    children: ReactNode
}

export const InputField:FC<INputFeildProps> = ({label, children,}) => {
    return (
        <form>
            <span>{label}</span>
            {children}
        </form>
    )
}