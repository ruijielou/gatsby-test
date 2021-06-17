/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const renderPage = require.resolve(`./src/templates/pageTemplate.js`);
  const pages = {
    home: {
      id: "home",
      path: "/home",
      component: renderPage,
    },
    product: {
      id: "product",
      path: "/product",
      component: renderPage,
    },
    aboutus: {
      id: "aboutus",
      path: "/aboutus",
      component: renderPage,
    },
    solution: {
      id: "solution",
      path: "/solution",
      component: renderPage,
    },
    partner: {
      id: "partner",
      path: "/partner",
      component: renderPage,
    },
  }
  const data = await graphql(`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  for (const key in pages) {
    if (Object.hasOwnProperty.call(pages, key)) {
      const element = pages[key]
      createPage({
        path: element.path,
        component: element.component,
        context: { id: element.id, content:data },
      })
    }
  }
}
