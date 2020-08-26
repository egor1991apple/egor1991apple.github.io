import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import Form from "../components/forms/mainSearchForm"
import SectionOffers from "../sections/offers/listOffers"
import SectionPlacementDialog from "../sections/offers/placementDialog"
import SectionBasket from "../sections/offers/basket"
import Drawer from "../components/dialog/drawer"
import MiniBasket from "../sections/offers/MiniBasket"
import SectionMobileControl from "../sections/offers/mobileControl"
import useMedia from "../hooks/useMedia"
import { GlobalContext } from "../store/context"

import { useCountTickets } from "../hooks/useCountTickets"

const duration = 600

const defaultSlideLeft = {
  maxWidth: 0,
  transition: `max-width ${duration}ms`,
  overflow: "hidden",
}
const SlideLeft = {
  entering: { maxWidth: 0 },
  entered: { maxWidth: 400 },
  exiting: { maxWidth: 0 },
  exited: { maxWidth: 0 },
}
const defaultSlideUp = {
  maxHeight: 0,
  transition: `max-height ${duration}ms`,
  overflow: "hidden",
}
const SlideUp = {
  entering: { maxHeight: 0 },
  entered: { maxHeight: "80vh" },
  exiting: { maxHeight: 0 },
  exited: { maxHeight: 0 },
}
export default function Offers({ location }) {
  const isMobile = useMedia(992)
  const {
    SHOW_MOBILE_BASKET_IN_OFFERS = false,
    SHOW_MOBILE_FILTER_IN_OFFERS = false,
    onShowMobileBasketInOffers = () => {},
    onShowMobileFilterInOffers = () => {},
  } = useContext(GlobalContext)

  const countTicketInBasket = useCountTickets()

  return (
    <Layout pageInfo={{ pageName: "offers" }} {...location}>
      <Container className="my-5 ">
        <Row className="bg-white border-radius shadow-sm rounded mx-0 overflow-hidden">
          {!isMobile ? (
            <Col lg="12" className="pt-3 border-bottom bg-light-3">
              <h3 className="text-center mb-3">Поиск автобусных билетов</h3>
              <Form type={"hor"} />
            </Col>
          ) : null}
          <Col lg="3" className={"pt-3 border-right"}>
            Фильтр
          </Col>

          <SectionOffers />
        </Row>
      </Container>
      <SectionPlacementDialog />

      <>
        <MiniBasket />
        <Drawer
          open={SHOW_MOBILE_BASKET_IN_OFFERS}
          type="bottom"
          NamePortal="BasketInOffersDrawer"
          callback={onShowMobileBasketInOffers}
        >
          <Container className={`h-100 `}>
            <Row className="mx-0 border rounded overflow-hidden h-100">
              <SectionBasket />{" "}
            </Row>
          </Container>
        </Drawer>
      </>

      {isMobile ? (
        <>
          <SectionMobileControl />

          <Drawer
            open={SHOW_MOBILE_BASKET_IN_OFFERS}
            type="bottom"
            NamePortal="BasketInOffersDrawer"
            callback={onShowMobileBasketInOffers}
          >
            <SectionBasket isMobile={isMobile} />
          </Drawer>

          <Drawer
            open={SHOW_MOBILE_FILTER_IN_OFFERS}
            type="bottom"
            NamePortal="FormInOffersDrawer"
            callback={onShowMobileFilterInOffers}
          >
            <Form />
          </Drawer>
        </>
      ) : null}
    </Layout>
  )
}
