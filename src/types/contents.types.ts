export type ContentType = {
    title: string
    summary: string
    date: string
    category?: string
}

export type ContentsNodeType = {
    node: {
        id: string
        fields: {
            slug: string
        }
        frontmatter: ContentType
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
