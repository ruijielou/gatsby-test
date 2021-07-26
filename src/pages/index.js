import * as React from "react"
import { navigate } from "gatsby"
import "../style/loading.css"

const IndexPage = () => {
  React.useEffect(() => {
    const navLanguage = (
      navigator.language || navigator.browserLanguage
    ).toLowerCase()
    if (navLanguage.indexOf("zh") >= 0) {
      navigate("/home")
    } else {
      navigate("/en/home")
    }
  }, [])
  return (<div className="loader"></div>)
}
export default IndexPage
