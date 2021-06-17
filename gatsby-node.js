/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const layoutData = require('./static/config.json');
console.log(layoutData, "lassss");
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const pages = {
    home: require.resolve(`./src/templates/home.js`),
    product: require.resolve(`./src/templates/product.js`),
    aboutus: require.resolve(`./src/templates/aboutus.js`),
    solution: require.resolve(`./src/templates/solution.js`),
    partner: require.resolve(`./src/templates/partner.js`),
  }
  layoutData && layoutData.forEach(route => {
    createPage({
      path: route.path,
      component: pages[route.id],
      context: { route },
    })
  })

  // createRedirect({
  //   fromPath: `/`,
  //   toPath: `/home`,
  //   redirectInBrowser: true,
  //   isPermanent: true,
  // })
}
