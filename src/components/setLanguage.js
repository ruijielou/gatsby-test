import * as React from "react"
import { Link } from "gatsby"

const SetLanguage = ({ language }) => {
  const dropdownClick = e => {
    const dropdown_source = document.querySelector(".dropdown_source")
    const dropdownShow = dropdown_source.style.display
    dropdownShow === "block"
      ? (dropdown_source.style.display = "none")
      : (dropdown_source.style.display = "block")
  }

  const toggleLanguage = lang => {
    if (lang) {
      localStorage.lang = lang
    }
  }

  return (
    <div className="dropdown" onClick={dropdownClick} data-dropdown="true">
      <div
        className="dropdown_title"
        data-dropdown="true"
        role="button"
        styling="link"
        tabIndex={0}
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
          <Link to="/home" onClick={() => toggleLanguage("zh")}>
            <li styling="link" className={language == '中文' ? 'active' : ""} data-source="zh" data-dropdown="true">
              中文
            </li>
          </Link>
          <Link to="/en/home" onClick={() => toggleLanguage("en")}>
            <li styling="link" className={language == 'English' ? 'active' : ""} data-source="en" data-dropdown="true">
              English
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default SetLanguage
