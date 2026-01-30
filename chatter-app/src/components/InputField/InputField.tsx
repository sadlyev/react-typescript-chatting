import type { ReactNode, FC } from "react"

interface INputFeildProps {
    label: string,
    children: ReactNode
}

export const InputField:FC<INputFeildProps> = ({label, children,}) => {
    return (
        <label>
            <span>{label}</span>
            {children}
        </label>
    )
}