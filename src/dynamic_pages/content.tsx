import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/templates/Layout'
import Aside from 'components/modules/Aside'
import Nav from 'components/modules/Nav'
import ContentHtml from 'components/atoms/ContentHtml'

import {
  ContentsMarkdownType,
  ContentMarkdownType,
} from '../types/contents.types'

type ContentPageProps = {
  data: {
    contentData: ContentMarkdownType
    contentsList: ContentsMarkdownType
  }
}

function Content({
  data: {
    contentData: { edges: contentDataEdges },
    contentsList: { edges: contentsListEdges },
  },
}: ContentPageProps) {
  const { html } = contentDataEdges[0].node

  return (
    <Layout>
      <Layout.Content>
        <Nav />
        <ContentHtml html={html} />
      </Layout.Content>
      <Layout.Side>
        <Aside menuList={contentsListEdges} />
      </Layout.Side>
    </Layout>
  )
}

export default Content

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    contentData: allMarkdownRemark(
      filter: { fields: { slug: { eq: $slug } } }
    ) {
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
