import * as React from 'react'

import { GithubOutlined } from '@ant-design/icons'

import Avatar from 'components/atoms/Avatar'

function Nav() {
  return (
    <nav
      className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
        bg-base-100 text-base-content shadow-s border-b"
    >
      <div className="navbar w-full d-flex justify-end">
        <Avatar
          name="Github"
          href="https://github.com/jun094"
          Icon={GithubOutlined}
        />
      </div>
    </nav>
  )
}

export default Nav
