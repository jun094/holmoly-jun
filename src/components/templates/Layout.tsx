import React, { ReactNode } from 'react'

import Aside from '../modules/Aside'
import Nav from '../modules/Nav'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <main className="drawer drawer-mobile">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <section className="drawer-content">
                <Nav />
                {children}
            </section>

            <Aside />
        </main>
    )
}

export default Layout
