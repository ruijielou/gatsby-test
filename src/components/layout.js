/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const hiddenDropdown = e => {
  console.log(e)
  const dropdown_source = document.querySelector(".dropdown_source"),
    target = e.target
  const isDropDownEl = target.dataset?.dropdown
  console.log(isDropDownEl)
  if (!isDropDownEl) {
    dropdown_source.style.display = "none"
  }
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          banner
        }
      }
    }
  `)

  const getLanguage = () => {
    const isBrowser = typeof window !== "undefined"
    let lang = "zh"
    if (isBrowser) {
      lang = sessionStorage.lang
    }
    if (lang === "en") {
      return "English"
    } else {
      return "中文"
    }
  }

  const menu = () => {
    const banner = data.site.siteMetadata?.banner
    console.log(banner);
    let menu = null
    // for (const key in banner) {
    //   menu += (
    //     <Link
    //       to="/"
    //       style={{
    //         color: `white`,
    //         textDecoration: `none`,
    //       }}
    //     >
    //       {banner[key]}
    //     </Link>
    //   )
    // }
    return menu
  }
  const banner = data.site.siteMetadata.banner
  console.log(banner, "data.site.siteMetadata");
  return (
    <div onClick={hiddenDropdown}>
      <Header
        // menu={menu}
        getLanguage={getLanguage}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
