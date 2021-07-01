import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import SetLanguage from "./setLanguage"

const Header = ({ menu, current, language, siteTitle }) => {
  /**注释获取本地存储语言信息 */
  // let [language, setLanguage] = React.useState('')
  // React.useEffect(() => {
  //   const localLang = localStorage.getItem("lang")

  //   let lang = localLang
  //   console.log(navigator.language, "navigator",language)
  //   if (!localLang) {
  //     lang = navigator.language.split("-")
  //   }

  //   const str = lang == "en" ? "English" : "中文"
  //   setLanguage((language = str))
  // }, [])
  // document.querySelector(".menu-link").addEventListener("click", function (e) {
  //   e.preventDefault()
  //   document.querySelector(".menu").classList.toggle("open")
  //   document.querySelector(".menu-overlay").classList.toggle("open")
  // })

  return (
    <header
      style={{
        background: `#3E3E58`,
        padding: "12px",
      }}
    >
      <div
        className="flex"
        style={{
          margin: `0 auto`,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="flex flex_center">
          <img
            src="/logo.svg"
            height="28"
            style={{ padding: "3px" }}
            alt={siteTitle}
          />
          <span className="site_title">{siteTitle}</span>
        </span>
        <nav className="nav flex flex_center flex_1">
          {menu &&
            menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={language === "en" ? `/en${item.path}` : item.path}
                  className={[
                    "nav_item",
                    current === item.id ? "active" : null,
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              )
            })}
        </nav>
        <span className="flex flex_center nav-right">
          <SetLanguage language={language} />
          <Link
            to="/"
            className="login"
            style={{
              color: `white`,
              fontSize: "14px",
              textDecoration: `none`,
            }}
          >
            登录/立即注册
          </Link>
        </span>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
