import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Product from "../components/product"
import Home from "../components/home"
import Aboutus from "../components/aboutus"
import Partner from "../components/partner"
import Solution from "../components/solution"
import useTranslations from "../components/useTranslations"

const PageTemplate = ({ pageContext: { id, content, locale } }) => {
  const data = content.data.site.siteMetadata
  const {
    aboutusMenu,
    partnerMenu,
    solutionMenu,
    productMenu,
    homeMenu,
  } = useTranslations(locale.siteLanguage)
  const headerData = {
    en: null,
    zh: null,
  }
  let menuData = headerData[locale.siteLanguage]
  if (!menuData) {
    menuData = [
      {
        id: "home",
        path: "/home",
        label: homeMenu,
      },
      {
        id: "product",
        path: "/product",
        label: productMenu,
      },
      {
        id: "solution",
        path: "/solution",
        label: solutionMenu,
      },
      {
        id: "partner",
        path: "/partner",
        label: partnerMenu,
      },
      {
        id: "aboutus",
        path: "/aboutus",
        label: aboutusMenu,
      },
    ]
  }
 
  const RenderMain = () => {
    if (id === "home") {
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
  const seoTitle = menuData.find(item => item.id == id).label
  return (
    <Layout
      id={id}
      sitedata={data}
      seoTitle={seoTitle}
      menuData={menuData}
      language={locale.siteLanguage}
    >
      <p>Welcome to {id}</p>
      {RenderMain()}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default PageTemplate
