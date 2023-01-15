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

    //*** Markdown Plugin (Markdown -> HTML 변환 및 마크다운 관련 유틸 라이브러리)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
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
          // NOTE: remark 라이브러리 중에 가장 마지막에 호출 !
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },

    //*** Data Sourcing Plugin (ex. gatsby-transformer-remark로 Markdown 파일을  Markdown 노드로 변환하도록 도와줌)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/contents/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/contents/__about`,
      },
    },

    //*** Image Optimization Plugin
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
}
