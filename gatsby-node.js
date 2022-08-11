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
                components: path.resolve(__dirname, 'src/components'),
                hooks: path.resolve(__dirname, 'src/hooks'),
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
