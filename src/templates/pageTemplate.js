import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Product from "../components/product"
import Home from "../components/home"
import Aboutus from "../components/aboutus"
import Partner from "../components/partner"
import Solution from "../components/solution"

const PageTemplate = ({ pageContext: { id, content, locale } }) => {
  const data = content.data.site.siteMetadata

  const RenderMain = () => {
    if (id === "home") {
      const i18data = graphql`
        query useTranslations {
          rawData: allFile(
            filter: { sourceInstanceName: { eq: "translations" } }
          ) {
            edges {
              node {
                name
                translations: childTranslationsJson {
                  hello
                  subline
                  backToHome
                }
              }
            }
          }
        }
      `
      console.log(i18data);
      return <Home></Home>
    }
    if (id === "product") {
      return <Product></Product>
    }
    if (id === "aboutus") {
      return <Aboutus></Aboutus>
    }
    if (id === "partner") {
      return <Partner></Partner>
    }
    if (id === "solution") {
      return <Solution></Solution>
    }
    return null
  }
  return (
    <Layout id={id} sitedata={data}>
      <p>Welcome to {id}</p>
      {RenderMain()}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default PageTemplate
