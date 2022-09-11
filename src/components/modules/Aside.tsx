import React, { useMemo } from 'react'
import { ReadOutlined, ClockCircleOutlined } from '@ant-design/icons'

import Logo from '_components/atoms/Logo'
import Menu from '_components/atoms/Menu'
import MenuItem from '_components/atoms/MenuItem'

import {
  ContentsListNodeType,
  ContentFrontmatterType,
  ContentHtmlAstChildrenType,
} from '_types/contents.types'

type listType = {
  id: string
  slug: string
  hTags: string[]
} & ContentFrontmatterType
type AsideProps = {
  menuList: ContentsListNodeType[]
}

function Aside({ menuList }: AsideProps) {
  const findHTags = (list: ContentHtmlAstChildrenType[]): string[] => {
    const hTags: string[] = []

    list.forEach(({ tagName, children }: ContentHtmlAstChildrenType) => {
      if ((tagName === 'h1' || tagName === 'h2') && children) {
        hTags.push(children[0].value)
      }
    })

    return hTags
  }

  const menuListByCategory = () => {
    const categoryMap = new Map<string | undefined, listType[]>()

    menuList.forEach(({ node: { fields, frontmatter, id, htmlAst } }) => {
      const { slug } = fields
      const { title, summary, date, category } = frontmatter
      const { children: htmlAstArray } = htmlAst

      const hTags: string[] = findHTags(htmlAstArray)
      const menuInfo: listType = {
        id,
        slug,
        hTags,
        title,
        summary,
        date,
      }

      if (categoryMap.has(category)) {
        const arr: listType[] = categoryMap.get(category) || []
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
