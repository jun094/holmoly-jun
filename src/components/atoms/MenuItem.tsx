import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'

type MenuItemProps = {
  to: string
  subMenu?: string[]
  children: React.ReactNode
}
function MenuItem({ to, children, subMenu }: MenuItemProps) {
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const { pathname } = window.location
    setIsActive(decodeURI(pathname) === to)
  }, [])

  return (
    <>
      <li>
        <Link to={to} activeClassName="active">
          {children}
        </Link>
      </li>

      {subMenu && (
        <>
          {subMenu.map(item => (
            <li className={cn(isActive ? 'd-flex' : 'hidden')}>
              <p className="text-xs2 px-6">{item}</p>
            </li>
          ))}
        </>
      )}
    </>
  )
}

MenuItem.defaultProps = {
  to: '/#',
}

export default MenuItem
