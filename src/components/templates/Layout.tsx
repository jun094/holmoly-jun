import React from 'react'

import Aside from 'components/modules/Aside'
import Content from 'components/modules/Content'

function Layout() {
    return (
        <main className="drawer drawer-mobile">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <Content />
            <Aside />
        </main>
    )
}

export default Layout
