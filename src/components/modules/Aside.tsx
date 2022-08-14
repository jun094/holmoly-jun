import React, { useState, useEffect } from 'react'

import Logo from 'components/atoms/Logo'
import Menu from 'components/atoms/Menu'
import MenuItem from 'components/atoms/MenuItem'

import { ContentsNodeType, ContentType } from 'types/contents.types'

type AsideProps = {
    node: ContentsNodeType[]
}
type menuType = ContentType & {
    id: string
    slug: string
}

function Aside({ node: menuList }: AsideProps) {
    const [menu, setMenu] = useState<[string, menuType[]][]>([
        [
            'id',
            [
                {
                    id: 'id',
                    slug: 'slug',
                    title: 'title',
                    summary: 'summary',
                    date: 'date',
                },
            ],
        ],
    ])

    useEffect(() => {
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
        setMenu([...categoryMap])
    }, [])

    return (
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
    )
}

export default Aside
