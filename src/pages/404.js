import * as React from "react"

import Layout from "../components/layout"

const locale = {siteLanguage: "en"}

const NotFoundPage = () => (
  <Layout id="404" locale={locale}>
    {/* <Seo title="404: Not found" /> */}
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
