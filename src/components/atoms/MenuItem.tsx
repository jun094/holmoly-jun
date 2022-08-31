import * as React from 'react'
import { Link } from 'gatsby'

type MenuItemProps = {
  to: string
  children: React.ReactNode
}
function MenuItem({ to, children }: MenuItemProps) {
  return (
    <li>
      <Link to={to} activeClassName="active">
        {children}
      </Link>
    </li>
  )
}

MenuItem.defaultProps = {
  to: '/#',
}

export default MenuItem
