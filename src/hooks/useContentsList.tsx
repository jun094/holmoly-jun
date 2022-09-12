import { useStaticQuery, graphql } from 'gatsby'

import { ContentsListType, ContentsListNodeType } from '_types/contents.types'

function useContentsList(): ContentsListNodeType[] {
  const {
    allMarkdownRemark: { edges },
  }: ContentsListType = useStaticQuery(graphql`
    query getContentsList {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              summary
              date(formatString: "MMMM DD, YYYY")
              thumbnail {
                publicURL
              }
            }
            tableOfContents(maxDepth: 2)
          }
        }
      }
    }
  `)

  return edges
}

export default useContentsList
