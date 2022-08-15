import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/templates/Layout'
import Content from 'components/modules/Content'
import Aside from 'components/modules/Aside'
import Nav from 'components/modules/Nav'

import { ContentsType } from '../types/contents.types'

type IndexPageProps = ContentsType

function IndexPage({
  data: {
    contentsData: { edges: node },
  },
}: IndexPageProps) {
  return (
    <Layout>
      <Layout.Content>
        <Nav />
        <Content />
      </Layout.Content>
      <Layout.Side>
        <Aside node={node} />
      </Layout.Side>
    </Layout>
  )
}

export default IndexPage

export const getContentsList = graphql`
  query getContentsList {
    contentsData: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            category
            summary
            date(formatString: "YYYY.MM.DD.")
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
    file(name: { eq: "thumbnail-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
