import React, { useMemo } from 'react'
import { ReadOutlined, ClockCircleOutlined } from '@ant-design/icons'

import Logo from '_components/atoms/Logo'
import Menu from '_components/atoms/Menu'
import MenuItem from '_components/atoms/MenuItem'

import {
  ContentsListNodeType,
  ContentFrontmatterType,
} from '_types/contents.types'

type AsideProps = {
  menuList: ContentsListNodeType[]
}
type menuType = ContentFrontmatterType & {
  id: string
  slug: string
}

function Aside({ menuList }: AsideProps) {
  const menuListByCategory = () => {
    const categoryMap = new Map<string, menuType[]>()

    menuList.forEach(({ node: { fields, frontmatter, id } }) => {
      const category: string = frontmatter?.category || ''
      const menuInfo: menuType = {
        id,
        slug: fields.slug,
        title: frontmatter.title,
        summary: frontmatter.summary,
        date: frontmatter.date,
      }

      if (categoryMap.has(category)) {
        const arr: menuType[] = categoryMap.get(category) || []
        arr.push(menuInfo)

        categoryMap.set(category, arr)
      } else {
        categoryMap.set(category, [menuInfo])
      }
    })

    return [...categoryMap]
  }

  const menuListedByCategory = useMemo(menuListByCategory, [menuList])

  return (
    <div className="bg-base-200 w-80">
      <Logo />

      <Menu>
        <MenuItem to="/">
          <ReadOutlined style={{ fontSize: '1.5rem' }} />

          <span className="flex-1">README</span>
        </MenuItem>
        <MenuItem to="/changelog">
          <ClockCircleOutlined style={{ fontSize: '1.5rem' }} />
          <span className="flex-1">CHANGELOG</span>
        </MenuItem>
      </Menu>

      <div className="h-4" />

      {menuListedByCategory.map(list => {
        const menuCategory = list[0]
        const menuItem = list[1]

        return (
          <Menu key={menuCategory} category={menuCategory}>
            {menuItem.map(({ id, slug, title }) => (
              <MenuItem key={id} to={slug}>
                {title}
              </MenuItem>
            ))}
          </Menu>
        )
      })}
    </div>
  )
}

export default Aside
