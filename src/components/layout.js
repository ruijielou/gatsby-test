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
import chitu from "../images/logo.png"
import QRCode from "../images/home/erweima.png"
// #3E3E58
const styles = {
  background: "#1F2532",
  width: "100%",

  lineHeight: "50px",
  textAlign: "center",
  fontSize: "12px",
  color: "#9393a5",
}

const Layout = ({ children, id, locale }) => {
  const language = locale?.siteLanguage || "zh";
  
  const {
    aboutusMenu,
    partnerMenu,
    solutionMenu,
    productMenu,
    homeMenu,
  } = useTranslations(language)
  const headerData = {
    en: null,
    zh: null,
  }
  let menuData = headerData[language]
  if (!menuData) {
    menuData = [
      {
        id: "home",
        path: "/home",
        label: homeMenu,
        isShow: true
      },
      {
        id: "product",
        path: "/product",
        label: productMenu,
        isShow: true
      },
      {
        id: "solution",
        path: "/solution",
        label: solutionMenu,
        isShow: true
      },
      {
        id: "partner",
        path: "/partner",
        label: partnerMenu,
        isShow: true
      },
      {
        id: "aboutus",
        path: "/aboutus",
        label: aboutusMenu,
        isShow: true
      },
      {
        id: "404",
        path: "/404",
        label: "404: Not found",
        isShow: false
      }
    ]
  }
  const menuClick = e => {
    e.preventDefault()
    document.querySelector(".menu").classList.toggle("open")
    document.querySelector(`.menu-overlay`).classList.toggle("open")
  }
  const { languageFiled, navigation } = useTranslations(language)
  const seoTitle = menuData.find(item => item.id === id).label
  return (
    <div data-bg={id}>
      <Seo title={seoTitle} />
      <Header
        current={id}
        menu={menuData}
        language={language}
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
      <footer style={styles}>
        <div className="footer-content flex flex_between">
          <div className="footer-list">
            <div className="footer-logo">
              <img src={chitu} />
            </div>
            <div className="footer-desc">
              <p>
                <span>联系电话:</span>400-1233-233
              </p>
              <p>
                <span>加入我们:</span>672899876@qq.com
              </p>
              <p>
                <span>商务合作:</span>12399872998
              </p>
              <p>
                <span>技术支持:</span>14432223455
              </p>
              <p>
                <span>公司地址:</span>河南省郑州市管城回族区正商蓝海广场
              </p>
            </div>
          </div>
          <div className="footer-list">
            <div className="footer-logo">
              <p>公司简介</p>
            </div>
            <div className="footer-desc">
              <p>新闻动态</p>
              <p>联系我们</p>
            </div>
          </div>
          <div className="footer-list">
            <div className="footer-logo">
              <p>隐私和政策</p>
            </div>
            <div className="footer-desc">
              <p>加入我们</p>
            </div>
          </div>
          <div className="QRCode">
            {/* <p className="page-text"></p> */}
            <img src={QRCode} />
            <img src={QRCode} />
          </div>
        </div>
        {/* © {new Date().getFullYear()}, */}
        <div className="footer-bottom">
          版权所有2018-2022
          <a style={{ color: "#fff" }} href="">
            赤兔信息科技有限公司
          </a>{" "}
          粤ICP备16115240号
        </div>
      </footer>
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
