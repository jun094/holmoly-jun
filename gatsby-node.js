const path = require('path')

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
