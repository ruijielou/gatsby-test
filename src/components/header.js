import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import SetLanguage from "./setLanguage"

const Header = ({ menu, current, language }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const siteTitle = site.siteMetadata?.title
  return (
    <header
      className="header"
      id={current}
      data-qid={current}
      data-id={current}
    >
      <div
        className="flex h_100"
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
              if (item.isShow) {
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
              }
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
