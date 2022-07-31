import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

type MenuItemProps = {
    to: string
    children: ReactNode
}
function MenuItem({ to, children }: MenuItemProps) {
    return (
        <li>
            <Link to={to}>{children}</Link>
        </li>
    )
}

MenuItem.defaultProps = {
    to: '/#',
}

export default MenuItem
