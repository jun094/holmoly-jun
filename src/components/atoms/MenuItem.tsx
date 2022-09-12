import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import ContentHtml from './ContentHtml'

type MenuItemProps = {
  to: string
  tableOfContents?: string
  children: React.ReactNode
}
function MenuItem({ to, tableOfContents, children }: MenuItemProps) {
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

      {tableOfContents && (
        <div className={cn(isActive ? 'd-flex' : 'hidden')}>
          <div className="mt-2" />
          <ContentHtml
            className="text-xs2 text-info px-2 [&_*]:p-0 [&_*]:w-full [&_a]:px-4 [&_a]:py-2"
            html={tableOfContents}
          />
        </div>
      )}
    </>
  )
}

MenuItem.defaultProps = {
  to: '/#',
}

export default MenuItem
