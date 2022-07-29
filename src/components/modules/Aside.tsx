import React from 'react'

import Menu from 'components/atoms/Menu'

function Aside() {
    return (
        <div className="drawer-side ">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <Menu>
                <li>
                    <a>Sidebar Item 1</a>
                </li>
                <li>
                    <a>Sidebar Item 2</a>
                </li>
            </Menu>
        </div>
    )
}

export default Aside
