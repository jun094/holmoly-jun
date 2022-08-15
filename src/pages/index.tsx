import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/templates/Layout'
import Aside from 'components/modules/Aside'
import Nav from 'components/modules/Nav'

import { ContentsType } from '../types/contents.types'

type IndexPageProps = ContentsType

function IndexPage({
  data: {
    contentsList: { edges },
  },
}: IndexPageProps) {
  return (
    <Layout>
      <Layout.Content>
        <Nav />
      </Layout.Content>
      <Layout.Side>
        <Aside menuList={edges} />
      </Layout.Side>
    </Layout>
  )
}

export default IndexPage

export const getContentsList = graphql`
  query getContentsList {
    contentsList: allMarkdownRemark(
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
  }
`
