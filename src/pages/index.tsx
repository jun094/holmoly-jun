import * as React from 'react'
import { graphql } from 'gatsby'

import PageWrapper from '_components/templates/PageWrapper'
import ContentHtml from '_components/atoms/ContentHtml'
import ContentHeader from '_components/atoms/ContentHeader'

import type { ContentFrontmatterType } from '_types/contents.types'

type MarkdownDataType = {
  id: string
  html: string
  frontmatter: ContentFrontmatterType
}
type HomePageProps = {
  data: {
    allMarkdownRemark: { nodes: MarkdownDataType[] }
  }
}
function HomePage({
  data: {
    allMarkdownRemark: { nodes },
  },
}: HomePageProps) {
  const {
    html,
    frontmatter: { date },
  } = nodes[0]

  return (
    <PageWrapper>
      <div className="prose px-2 py-24 my-0 mx-auto">
        <ContentHeader title="안녕하세요, Holymoly.Jun 입니다." date={date} />
        <ContentHtml html={html} />
      </div>
    </PageWrapper>
  )
}

export default HomePage

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataByReadme {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/__about/README/" } }
    ) {
      nodes {
        id
        html
        frontmatter {
          date
        }
      }
    }
  }
`
