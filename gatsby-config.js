module.exports = {
    siteMetadata: {
        title: `Holymoly Jun`,
        descripton: `Holymoly Jun Blog`,
        siteUrl: `https://github.com/jun094`,
        author: `holymoly.jun`,
    },
    graphqlTypegen: true,
    plugins: [
        //*** Assential Plugin
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        'gatsby-plugin-postcss',

        //*** Data Sourcing Plugin (ex. gatsby-transformer-remark로 Markdown 파일을  Markdown 노드로 변환하도록 도와줌)
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents`,
            },
        },

        //*** Markdown Plugin (Markdown -> HTML 변환)
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-smartypants',
                        options: {
                            dashes: 'oldschool',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 768,
                            quality: 100,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {},
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow',
                        },
                    },
                ],
            },
        },
    ],
}
