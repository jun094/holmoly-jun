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
            <Layout.Top>
                <Nav />
            </Layout.Top>
            <Layout.Left>
                <Aside />
            </Layout.Left>
            <Layout.Middle>
                <Content />
            </Layout.Middle>
        </Layout>
    )
}

export default IndexPage

export const getContentsList = graphql`
    query getContentsList {
        contentsData: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
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
