import * as React from 'react'
import { graphql } from 'gatsby'

import PageWrapper from '_components/templates/PageWrapper'
import ContentHeader from '_components/atoms/ContentHeader'
import ContentHtml from '_components/atoms/ContentHtml'

import { ContentItemType } from '_types/contents.types'

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
      <article className="prose px-4 py-24 my-0 mx-auto">
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
