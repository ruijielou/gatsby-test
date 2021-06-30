/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// normalize CSS across browsers
// custom CSS styles
import "./src/style/style.css"
import "./src/style/layout.css"

document.querySelector("body").addEventListener("click", (e) => {
  const dropdown_source = document.querySelector(".dropdown_source"),
    target = e.target
    console.log(dropdown_source,"dropdown_source");
  const isDropDownEl = target.dataset?.dropdown
  if (!isDropDownEl && dropdown_source) {
    dropdown_source.style.display = "none"
  }
})
