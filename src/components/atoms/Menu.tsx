import React, { ReactNode } from 'react'

type MenuProps = {
    category?: string
    children: ReactNode
}

function Menu({ category, children }: MenuProps) {
    return (
        <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li />
            {category && (
                <li className="menu-title">
                    <span>{category}</span>
                </li>
            )}

            {children}
        </ul>
    )
}

export default Menu
