/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const locales = require(`./config/i18n.js`);

exports.createPages = async ({ graphql, page, actions }) => {
  const { createPage } = actions

  const renderPage = require.resolve(`./src/templates/pageTemplate.js`)
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
          context: { id: element.id, content: data, locale: locales[lang]},
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
//   console.log(config);
//   // config.output.publicPath = "./"

//       actions.setWebpackConfig({
//         // plugins: [new LodashModuleReplacementPlugin()],
      
//           output: "/dist",
        
//       });
  
// };
