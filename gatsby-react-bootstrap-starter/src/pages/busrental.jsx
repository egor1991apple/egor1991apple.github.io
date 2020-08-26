import React, { useContext } from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalContext } from "../store/context"
import BusRentalCard from "../components/cards/bus_rental"
import ReactHtmlParser from "react-html-parser"
import SectionForm from "../sections/offers/formOffers"
const BusRental = ({ location }) => {
  const { BUS_RENTAL = {} } = useContext(GlobalContext)
  const { description = "", offers = [] } = BUS_RENTAL

  return (
    <Layout pageInfo={{ pageName: "offers" }} {...location}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Container className="my-5">
        <Row className="bg-white border-radius shadow-sm rounded mx-0">
          <SectionForm />
          <Col md="12" lg="8" className="py-3 mx-auto">
            {offers.length > 0
              ? offers.map(item => (
                  <BusRentalCard key={`${item.id}_rental_card`} {...item} />
                ))
              : null}
          </Col>
          <Col xs="12" className="p-3 border bg-light-2">
            {ReactHtmlParser(description)}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BusRental
