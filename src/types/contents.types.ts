export type ContentsNodeType = {
    node: {
        id: string
        fields: {
            slug: number
        }
        frontmatter: {
            title: string
            summary: string
            date: string
            category: string
        }
        fileAbsolutePath: string
    }
}
export type ContentsMarkdownType = {
    edges: ContentsNodeType[]
}

export type ContentsType = {
    data: {
        contentsData: ContentsMarkdownType
    }
}
