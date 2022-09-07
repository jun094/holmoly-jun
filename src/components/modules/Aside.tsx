import React from 'react'
import { CgReadme } from 'react-icons/cg'
import { MdPublishedWithChanges } from 'react-icons/md'

import Logo from 'components/atoms/Logo'
import Menu from 'components/atoms/Menu'
import MenuItem from 'components/atoms/MenuItem'

import {
  ContentsListNodeType,
  ContentFrontmatterType,
} from 'types/contents.types'

type AsideProps = {
  menuList: ContentsListNodeType[]
}
type menuType = ContentFrontmatterType & {
  id: string
  slug: string
}

const getMenu = (list: ContentsListNodeType[]) => {
  const categoryMap = new Map<string, menuType[]>()

  list.forEach(({ node: { fields, frontmatter, id } }) => {
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

function Aside({ menuList }: AsideProps) {
  const menu = getMenu(menuList)

  return (
    <div className="bg-base-200 w-80">
      <Logo />

      <Menu>
        <MenuItem to="/">
          <CgReadme size="1.5rem" />
          <span className="flex-1">README</span>
        </MenuItem>
        <MenuItem to="/changelog">
          <MdPublishedWithChanges size="1.5rem" />
          <span className="flex-1">CHANGELOG</span>
        </MenuItem>
      </Menu>

      <div className="h-4" />

      {menu.map(list => {
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
