// import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { LocaleContext } from "./layout"

const useTranslations = locale => {
  // Grab the locale (passed through context) from the Context Provider
  // const { locale } =
  // Query the JSON files in <rootDir>/i18n/translations
  console.log(query, "query")
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    console.log(item)
    return {
      name: item.node.name,
      translations: item.node.translations,
    }
  })
  console.log(rawData, "rawData")
  console.log(simplified, "simplified")

  // Only return translations for the current locale
  const { translations } =
    simplified && simplified.filter(lang => lang.name === locale)[0]
  // console.log( translations, "translations", locale);

  return translations
}

export default useTranslations

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            navigation
            languageFiled
            aboutusMenu
            partnerMenu
            solutionMenu
            productMenu
            homeMenu
            hello
            subline
            backToHome
          }
        }
      }
    }
  }
`
