module.exports = {
  siteMetadata: {
    title: `赤兔科技`,
    description: ``,
    author: `emma`,
    banner: 
       "home,product,solution,partner,aboutus"
      // zh: "home,product,solution,partner,aboutus"
    
    // banner: [{"id":"home","label":"首页"},{"id":"product","label":"产品"},{"id":"solution","label":"解决方案"},{"id":"partner","label":"合作伙伴"},{"id":"aboutus","label":"关于我们"}],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/config`,// 文件路径
        name: 'config', // 名称，可以用来过滤
        ignore: [] // 可选的，忽略的文件
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  flags: {
    THE_FLAG: false,
    PRESERVE_WEBPACK_CACHE: true,
  },
}
