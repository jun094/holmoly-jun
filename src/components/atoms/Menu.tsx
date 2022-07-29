import React, { ReactNode } from 'react'

type MenuProps = {
    children: ReactNode
}

function Menu({ children }: MenuProps) {
    return (
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
            {children}
        </ul>
    )
}

export default Menu
