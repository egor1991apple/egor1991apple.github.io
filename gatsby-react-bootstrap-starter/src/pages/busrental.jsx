import React, { useContext } from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalContext } from "../store/context"
import BusRentalCard from "../components/cards/bus_rental"
import RentalTarifCard from "../components/cards/rentalTarif"
import ReactHtmlParser from "react-html-parser"
import RentBusDialog from "../components/dialog/rentBusDailog"
import Form from "../components/forms/mainSearchForm"
import useMedia from "../hooks/useMedia"
const BusRental = ({ location }) => {
  const isMobile = useMedia(992)
  const {
    BUS_RENTAL = {},
    BASKET_RENTAL = null,
    onShowBusRentalRateDialog = () => {},
    onCheckedBusRentalRates = () => {},
    onBasketRentalCommit = () => {},
    onAddBasketRental = () => {},

    //SELECTED_BUSRENTAL_ID = 0,
  } = useContext(GlobalContext)
  const { description = "", offers = [] } = BUS_RENTAL

  return (
    <Layout pageInfo={{ pageName: "offers" }} {...location}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Container className="my-5">
        <Row className="bg-white border-radius shadow-sm rounded mx-0">
          {!isMobile ? (
            <Col lg="12" className="pt-3 border-bottom bg-light-3">
              <h3 className="text-center mb-3">Поиск автобусных билетов</h3>
              <Form type={"hor"} />
            </Col>
          ) : null}
          <Col lg="3" className="py-3 border-right">
            филтр
          </Col>

          <Col md="12" lg="9" className="py-3 mx-auto">
            {offers.length > 0
              ? offers.map(item => (
                  <BusRentalCard
                    key={`${item.id}_rental_card`}
                    {...item}
                    callback={() => {
                      onShowBusRentalRateDialog()
                      onAddBasketRental(item)
                    }}
                  />
                ))
              : null}
          </Col>

          <Col xs="12" className="p-3 border bg-light-2">
            {ReactHtmlParser(description)}
          </Col>
        </Row>
      </Container>
      {BASKET_RENTAL ? (
        <RentBusDialog callback={onBasketRentalCommit}>
          <table className="table-tarif">
            {BASKET_RENTAL.rates.map(item => (
              <RentalTarifCard
                key={`${item.id}_rental`}
                {...item}
                callback={onCheckedBusRentalRates}
              />
            ))}
          </table>
        </RentBusDialog>
      ) : null}
    </Layout>
  )
}

export default BusRental
