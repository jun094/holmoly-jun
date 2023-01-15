import * as React from 'react'
import { graphql } from 'gatsby'

import PageWrapper from '_components/templates/PageWrapper'
import ContentHtml from '_components/atoms/ContentHtml'

type MarkdownDataType = {
  id: string
  html: string
}
type ChangeLogPageProps = {
  data: {
    allMarkdownRemark: { nodes: MarkdownDataType[] }
  }
}
function ChangeLogPage({
  data: {
    allMarkdownRemark: { nodes },
  },
}: ChangeLogPageProps) {
  const { html } = nodes[0]

  return (
    <PageWrapper>
      <div className="prose px-2 py-24 my-0 mx-auto">
        <ContentHtml html={html} />
      </div>
    </PageWrapper>
  )
}

export default ChangeLogPage

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataByChangelog {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/__about/CHANGELOG/" } }
    ) {
      nodes {
        id
        html
      }
    }
  }
`
