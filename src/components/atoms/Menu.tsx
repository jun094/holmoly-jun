import React, { ReactNode } from 'react'

type MenuProps = {
    title?: string
    children: ReactNode
}

function Menu({ title, children }: MenuProps) {
    return (
        <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li />
            {title && (
                <li className="menu-title">
                    <span>{title}</span>
                </li>
            )}

            {children}
        </ul>
    )
}

export default Menu
