import * as React from 'react'

type AvatarProps = {
  name: string
  href: string
  Icon: any
}

function Avatar({ name, href, Icon }: AvatarProps) {
  return (
    <span
      className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip={name}
    >
      <div className="flex-none items-center">
        <a
          aria-label={name}
          target="_blank"
          href={href}
          rel="noopener"
          className="btn btn-ghost drawer-button btn-square normal-case"
        >
          <Icon className="text-2xl" />
        </a>
      </div>
    </span>
  )
}
export default Avatar
