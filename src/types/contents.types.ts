import { IGatsbyImageData } from 'gatsby-plugin-image'

//*** Contents
export type ContentFrontmatterType = {
  title: string
  summary: string
  date: string
  category?: string
  thumbnail?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
}
export type ContentsNodeType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: ContentFrontmatterType
  }
}
export type ContentsMarkdownType = {
  edges: ContentsNodeType[]
}

export type ContentsType = {
  data: {
    contentsList: ContentsMarkdownType
  }
}

//*** Content
export type ContentNodeType = {
  node: {
    html: string
    frontmatter: ContentFrontmatterType
  }
}
export type ContentMarkdownType = {
  edges: ContentNodeType[]
}
export type ContentType = {
  data: {
    contentData: ContentsMarkdownType
  }
}
