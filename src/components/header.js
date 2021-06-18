import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const dropdownClick = e => {
  const dropdown_source = document.querySelector(".dropdown_source")
  const dropdownShow = dropdown_source.style.display
  dropdownShow === "block"
    ? (dropdown_source.style.display = "none")
    : (dropdown_source.style.display = "block")
}
const setLanguage = e => {
  const languageType = e.target.dataset?.source
  if (languageType) {
    sessionStorage.lang = languageType
    document.querySelector(".dropdown_source").style.display = "none"
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
      window.location.reload()
    }
  }
}

const Header = ({ menu, current, siteTitle, language }) => (
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
        {/* {menu} */}

        {menu &&
          menu.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
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
      <div className="dropdown" data-dropdown="true">
        <div
          className="dropdown_title"
          data-dropdown="true"
          role="button"
          styling="link"
          tabIndex={0}
          onKeyDown={dropdownClick}
        >
          <span data-dropdown="true" suppressHydrationWarning>
            {language}
          </span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </div>
        <div data-dropdown="true" className="dropdown_source">
          <ul data-dropdown="true">
            <li
              styling="link"
              onClick={setLanguage}
              data-source="zh"
              data-dropdown="true"
            >
              中文
            </li>
            <li
              styling="link"
              onClick={setLanguage}
              data-source="en"
              data-dropdown="true"
            >
              English
            </li>
          </ul>
        </div>
      </div>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
