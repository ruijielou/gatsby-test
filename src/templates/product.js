import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Product = ({ pageContext: { route } }) => (
  <Layout>
    <Seo title={route.name} />
    <h1>Hi from the second page</h1>
    <p>Welcome to{route.name}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default Product