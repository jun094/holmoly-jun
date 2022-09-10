import * as React from 'react'
import { graphql } from 'gatsby'

import PageWrapper from 'components/templates/PageWrapper'
import ContentHeader from 'components/atoms/ContentHeader'
import ContentHtml from 'components/atoms/ContentHtml'

import { ContentItemType } from '../types/contents.types'

type ContentPageProps = ContentItemType

function ContentPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: ContentPageProps) {
  const { html, frontmatter } = edges[0].node
  const { title, date, thumbnail } = frontmatter

  return (
    <PageWrapper>
      <article className="prose px-3 py-24 my-0 mx-auto">
        <ContentHeader title={title} date={date} image={thumbnail} />
        <ContentHtml html={html} />
      </article>
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
            date(formatString: "MMMM DD, YYYY")
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
