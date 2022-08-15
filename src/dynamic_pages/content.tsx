import * as React from 'react'
import { graphql } from 'gatsby'

import PageWrapper from 'components/templates/PageWrapper'
import ContentHtml from 'components/atoms/ContentHtml'

import { ContentItemType } from '../types/contents.types'

type ContentPageProps = ContentItemType

function ContentPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: ContentPageProps) {
  const { html } = edges[0].node

  return (
    <PageWrapper>
      <ContentHtml html={html} />
    </PageWrapper>
  )
}

export default ContentPage

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            category
            summary
            date(formatString: "YYYY.MM.DD.")
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
