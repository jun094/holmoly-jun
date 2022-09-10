// Webpack Config

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

//*** webpack 절대 경로 설정
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        _components: path.resolve(__dirname, 'src/components'),
        _constants: path.resolve(__dirname, 'src/constants'),
        _hooks: path.resolve(__dirname, 'src/hooks'),
        _styles: path.resolve(__dirname, 'src/styles'),
        _pages: path.resolve(__dirname, 'src/pages'),
        _dynamic_pages: path.resolve(__dirname, 'src/dynamic_pages'),
        _types: path.resolve(__dirname, 'src/types'),
      },
    },
  })
}

//*** 마크다운 데이터 Slug 생성
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({ node, name: 'slug', value: slug })
  }
}

//*** 동적 페이지 생성 -> /src/dynamic_pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // 1. 마크다운 데이터 추출하는 쿼리문 작성
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  )

  // 2. 쿼리문 에러 핸드링
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // 3. 동적 페이지 - content 불러오기
  const ContentTemplate = path.resolve(
    __dirname,
    'src/dynamic_pages/content.tsx',
  )

  // 4. 동적 페이지 생성
  const createContentPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: ContentTemplate,
      context: { slug },
    }

    createPage(pageOptions)
  }
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(createContentPage)
}
