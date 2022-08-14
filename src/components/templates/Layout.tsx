import React, { ReactNode } from 'react'

type ChildrenType = {
    children: ReactNode
}

function Side({ children }: ChildrenType) {
    return (
        <aside className="drawer-side">
            <label htmlFor="drawer-opener" className="drawer-overlay" />
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
            <input
                id="drawer-opener"
                type="checkbox"
                className="drawer-toggle"
            />
            {children}
        </main>
    )
}

Layout.Content = Content
Layout.Side = Side

export default Layout
