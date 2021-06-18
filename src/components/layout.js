/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Seo from "./seo"
import Header from "./header"
import axios from "axios"

// const hiddenDropdown = e => {
//   const dropdown_source = document.querySelector(".dropdown_source"),
//     target = e.target
//   const isDropDownEl = target.dataset?.dropdown
//   if (!isDropDownEl) {
//     dropdown_source.style.display = "none"
//   }
// }
class Layout extends React.Component {
  state = {
    menuData: [],
  }
  getLanguage = () => {
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
   getInitData() {
    axios
      .get("/config.json?t=" + Math.random())
      .then(response => {
        if (response) {
          window.menuData = response.data;
          this.setState({menuData: window.menuData})
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  async componentDidMount() {
    if (!window.menuData) {
     await this.getInitData();
    }else {
      this.setState({menuData: window.menuData})
    }
  }
  render() {
    const language = this.getLanguage()
    const { children, sitedata, id } = this.props
    const {menuData} = this.state
    const currentRoute = menuData && menuData.find(item => item.id === id)
    const seoTitle = currentRoute
      ? language === "English"
        ? currentRoute.enLabel
        : currentRoute.zhLabel
      : id

    return (
      <>
        <Seo title={seoTitle} />
        <Header
          current={id}
          menu={menuData}
          language={language}
          siteTitle={sitedata? sitedata.title : `Title`}
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
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
