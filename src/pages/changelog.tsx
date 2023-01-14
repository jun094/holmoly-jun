import * as React from 'react'
import { graphql } from 'gatsby'

import PageWrapper from '_components/templates/PageWrapper'
import ContentHtml from '_components/atoms/ContentHtml'

type MarkdownDataType = {
  id: string
  html: string
}
type IndexPageProps = {
  data: {
    allMarkdownRemark: { nodes: MarkdownDataType[] }
  }
}
function IndexPage({
  data: {
    allMarkdownRemark: { nodes },
  },
}: IndexPageProps) {
  const { html } = nodes[0]

  return (
    <PageWrapper>
      <div className="prose px-2 py-24 my-0 mx-auto">
        <ContentHtml html={html} />
      </div>
    </PageWrapper>
  )
}

export default IndexPage

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataByChangelog {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/CHANGELOG/" } }) {
      nodes {
        id
        html
      }
    }
  }
`
