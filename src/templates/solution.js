import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Solution = ({ pageContext: { layoutData, route} }) => (
  <Layout layoutData={layoutData} route={route}>
    <p>Welcome to{route.id}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default Solution
