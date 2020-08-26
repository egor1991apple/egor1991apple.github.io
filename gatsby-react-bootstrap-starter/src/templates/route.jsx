import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionRoutes from "../sections/routes/allRoutes"

const RoutePage = ({ location, ...rest }) => {
  // console.log(rest)
  return (
    <Layout pageInfo={{ pageName: "routes" }} {...location}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <SectionRoutes />
    </Layout>
  )
}

export default RoutePage
