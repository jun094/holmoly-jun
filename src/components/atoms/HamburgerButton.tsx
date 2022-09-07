import * as React from 'react'
import { MenuOutlined } from '@ant-design/icons'

type HamburgerButtonProps = {
  htmlFor: string
}

function HamburgerButton({ htmlFor }: HamburgerButtonProps) {
  return (
    <label className="btn btn-square btn-ghost" htmlFor={htmlFor}>
      <MenuOutlined style={{ fontSize: '1.25rem' }} />
    </label>
  )
}

export default HamburgerButton
