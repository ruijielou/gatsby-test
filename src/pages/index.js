import * as React from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  React.useEffect(() => {
    const localLang = localStorage.getItem("lang")
    let lang = localLang
    if(lang === 'en') {
      navigate('/en/home/');
    }else {
      navigate('/home/');
    }
  }, [])
  return null;
}

export default IndexPage
