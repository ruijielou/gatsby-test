import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import SetLanguage from "./setLanguage"

const Header = ({ menu, current, siteTitle }) => {
  let [language, setLanguage] = React.useState('')
  React.useEffect(() => {
    const localLang = localStorage.getItem("lang")
    
    let lang = localLang
    console.log(navigator.language, "navigator",language)
    if (!localLang) {
      lang = navigator.language.split("-")
    }

    const str = lang == "en" ? "English" : "中文"
    setLanguage((language = str))
  }, [])
  return (
    <header
      style={{
        background: `#3E3E58`,
        padding: "5px",
      }}
    >
      <div
        className="flex flex_center flex_between"
        style={{
          margin: `0 auto`,
          width: "100%",
          padding: `0 0.5rem`,
        }}
      >
        <img src="/logo.svg" height="35" alt={siteTitle} />
        <span className="site_title">{siteTitle}</span>
        <nav className="nav flex flex_center flex_1">
          {menu &&
            menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={language === "English" ? `/en${item.path}` : item.path}
                  className={[
                    "nav_item",
                    current === item.id ? "active" : null,
                  ].join(" ")}
                >
                  {language === "English" ? item.enLabel : item.zhLabel}
                </Link>
              )
            })}
        </nav>
        <SetLanguage language={language} />
        <Link
          to="/"
          style={{
            color: `white`,
            fontSize: "14px",
            textDecoration: `none`,
          }}
        >
          登录/立即注册
        </Link>
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
