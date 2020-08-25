import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionRoutes from "../sections/routes/allRoutes"

const IndexPage = ({ location }) => (
  <Layout pageInfo={{ pageName: "routes" }} {...location}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <SectionRoutes />
  </Layout>
)

export default IndexPage
