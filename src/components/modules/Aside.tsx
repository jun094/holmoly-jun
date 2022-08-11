import * as React from 'react'

import Logo from 'components/atoms/Logo'
import Menu from 'components/atoms/Menu'
import MenuItem from 'components/atoms/MenuItem'

function Aside() {
    return (
        <aside className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <div className="bg-base-200 w-80">
                <Logo />

                <Menu>
                    <MenuItem> Introduction</MenuItem>
                    <MenuItem> Series</MenuItem>
                </Menu>

                <div className="h-4" />

                <Menu title="네트워크">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="React">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>

                <Menu title="네트워크">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="React">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>

                <Menu title="네트워크">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="React">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="네트워크">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="React">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="네트워크">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="React">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="네트워크">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
                <Menu title="React">
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                    <MenuItem> item 1</MenuItem>
                </Menu>
            </div>
        </aside>
    )
}

export default Aside
