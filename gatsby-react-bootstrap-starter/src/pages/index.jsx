import React, { useEffect } from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Layout from "../layout"

import SectionFormHorizontal from "../sections/allPages/SearchFormHorizontal"
import SectionCountryOffers from "../sections/mainPage/countryOffers"
import SectionCountryList from "../sections/mainPage/countryList"
//import SectionWhyWeAre from "sections/mainPage/mainWhyWeAre"
//
//import SectionNews from "sections/mainPage/mainNews"

const IndexPage = ({ location }) => {
  return (
    <Layout pageInfo={{ pageName: "main" }} {...location}>
      <SectionFormHorizontal />

      <SectionCountryOffers />
      <SectionCountryList />
      {/* <SectionWhyWeAre />
      <SectionNews /> */}
    </Layout>
  )
}

export default IndexPage
