/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const locales = require(`./config/i18n.js`);

exports.createPages = async ({ graphql, page, actions }) => {
  const { createPage } = actions
  // deletePage(page)
  const pages = {
    home: {
      id: "home",
      path: "/home",
      component: require.resolve(`./src/views/home.js`),
    },
    product: {
      id: "product",
      path: "/product",
      component: require.resolve(`./src/views/product.js`),
    },
    aboutus: {
      id: "aboutus",
      path: "/aboutus",
      component: require.resolve(`./src/views/aboutus.js`),
    },
    solution: {
      id: "solution",
      path: "/solution",
      component: require.resolve(`./src/views/solution.js`),
    },
    partner: {
      id: "partner",
      path: "/partner",
      component: require.resolve(`./src/views/partner.js`),
    },
  }
  
  Object.keys(locales).map(lang => {
    // Use the values defined in "locales" to construct the path
    for (const key in pages) {
      if (Object.hasOwnProperty.call(pages, key)) {
        const element = pages[key]
        const localizedPath = locales[lang].default
        ? element.path
        : `${locales[lang].path}${element.path}`
        createPage({
          path: localizedPath,
          component: element.component,
          context: { locale: locales[lang]},
        })
      }
    }

    // return createPage({
    //   // Pass on everything from the original page
    //   ...page,
    //   // Since page.path returns with a trailing slash (e.g. "/de/")
    //   // We want to remove that
    //   path: removeTrailingSlash(localizedPath),
    //   // Pass in the locale as context to every page
    //   // This context also gets passed to the src/components/layout file
    //   // This should ensure that the locale is available on every page
    //   context: {
    //     ...page.context,
    //     locale: lang,
    //     dateFormat: locales[lang].dateFormat,
    //   },
    // })
  })
  
}

// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//   const config = getConfig();
//   // config.output.publicPath = "./"

//       actions.setWebpackConfig({
//         // plugins: [new LodashModuleReplacementPlugin()],
      
//           output: "/dist",
        
//       });
  
// };
