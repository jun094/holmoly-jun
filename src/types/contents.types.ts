import { IGatsbyImageData } from 'gatsby-plugin-image'

//*** Contents thumbnail 이밎
export type ContentThumbnailType = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
  publicURL: string
}

//*** Contents
export type ContentFrontmatterType = {
  title: string
  summary: string
  date: string
  category?: string
  thumbnail?: ContentThumbnailType
}

//*** Contents List - 모든 컨텐츠
export type ContentsListNodeType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: ContentFrontmatterType
  }
}
export type ContentsListMarkdownType = {
  edges: ContentsListNodeType[]
}

export type ContentsListType = {
  allMarkdownRemark: ContentsListMarkdownType
}

//*** Contents Item - 특정 컨텐츠
export type ContentItemNodeType = {
  node: {
    html: string
    frontmatter: ContentFrontmatterType
  }
}
export type ContentItemMarkdownType = {
  edges: ContentItemNodeType[]
}
export type ContentItemType = {
  data: {
    allMarkdownRemark: ContentItemMarkdownType
  }
}
