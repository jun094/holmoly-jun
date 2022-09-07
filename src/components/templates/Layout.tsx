import React, { ReactNode } from 'react'
import { DRAWER_TOGGLER } from 'constants/index'

type ChildrenType = {
  children: ReactNode
}

function Side({ children }: ChildrenType) {
  return (
    <aside className="drawer-side">
      <label htmlFor={DRAWER_TOGGLER} className="drawer-overlay" />
      {children}
    </aside>
  )
}
function Content({ children }: ChildrenType) {
  return <section className="drawer-content">{children}</section>
}
function Layout({ children }: ChildrenType) {
  return (
    <main className="drawer drawer-mobile">
      <input id={DRAWER_TOGGLER} type="checkbox" className="drawer-toggle" />
      {children}
    </main>
  )
}

Layout.Content = Content
Layout.Side = Side

export default Layout
