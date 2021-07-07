/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
// import PropTypes from "prop-types"
import Seo from "./seo"
import Header from "./header"
import { Link } from "gatsby"
import useTranslations from "./useTranslations"

const Layout = ({ children, sitedata, id, menuData, seoTitle, language }) => {
  const menuClick = e => {
    e.preventDefault()
    document.querySelector(`[data-menu=${id}]`).classList.toggle("open")
    document.querySelector(`[data-id=${id}]`).classList.toggle("open")
  }
  const {languageFiled, navigation} = useTranslations(language)

  return (
    <div data-bg={id}>
      <Seo title={seoTitle} />
      <Header
        current={id}
        menu={menuData}
        language={language}
        siteTitle={sitedata ? sitedata.title : `Title`}
      />
      <div className="menu" data-menu={id}>
        <span className="menu-circle"></span>
        <a href="#" className="menu-link" onClick={menuClick}>
          <span className="menu-icon">
            <span className="menu-line menu-line-1"></span>
            <span className="menu-line menu-line-2"></span>
            <span className="menu-line menu-line-3"></span>
          </span>
        </a>
      </div>
      <div className="menu-overlay" data-id={id}>
        <div className="js-nav-header nav-header">
          <span className="nav-header-text">{navigation}</span>
          <div
            className="nav-header-line"
            style={{ position: "absolute", transform: "scale(1, 1)" }}
          ></div>
        </div>
        {menuData &&
          menuData.map((item, index) => {
            return (
              <Link
                key={index}
                to={language === "en" ? `/en${item.path}` : item.path}
                className={["nav_item", id === item.id ? "active" : null].join(
                  " "
                )}
              >
                {item.label}
              </Link>
            )
          })}
        <div className="js-nav-header nav-header">
          <span className="nav-header-text">{languageFiled}</span>
          <div
            className="nav-header-line"
            style={{ position: "absolute", transform: "scale(1, 1)" }}
          ></div>
        </div>
        <Link
          to="/home"
          className={["nav_item", language === "zh" ? "active" : null].join(
            " "
          )}
        >
          中文
        </Link>
        <Link
          to="/en/home"
          className={["nav_item", language === "en" ? "active" : null].join(
            " "
          )}
        >
          English
        </Link>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: "100vh",
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

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
