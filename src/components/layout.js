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
const styles = {
  background: '#3E3E58',
  width: '100%',
  height: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  color: '#ffffff'
}

const Layout = ({ children, sitedata, id, menuData, seoTitle, language }) => {
  const menuClick = e => {
    e.preventDefault()
    document.querySelector(".menu").classList.toggle("open")
    document.querySelector(`.menu-overlay`).classList.toggle("open")
  }
  const { languageFiled, navigation } = useTranslations(language)

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
        <div className="menu-overlay-link">
          <a href="#" className="menu-link" onClick={menuClick}>
            <span className="menu-icon">
              <span className="menu-line menu-line-1"></span>
              <span className="menu-line menu-line-3"></span>
            </span>
          </a>
        </div>
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
          width: "100%",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={styles}
      >
        {/* © {new Date().getFullYear()}, */}
       版权所有2018-2022<a style={{color: "#fff"}} href="">赤兔信息科技有限公司</a> 粤ICP备16115240号
        
      </footer>
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
