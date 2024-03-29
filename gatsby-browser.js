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

document.querySelector("body").addEventListener("click", e => {
  const dropdown_source = document.querySelector(".dropdown_source"),
    target = e.target
  const isDropDownEl = target.dataset?.dropdown
  if (!isDropDownEl && dropdown_source) {
    dropdown_source.classList.remove("dropdown_source_show")
  }
})

window.onscroll = () => {
  if (window.scrollY > 150) {
    document.querySelector(".header").dataset.id = ""
  }
  if (window.scrollY <= 150) {
    document.querySelector(".header").dataset.id = document.querySelector(".header").dataset.qid 
  }
}
