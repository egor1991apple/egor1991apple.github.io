import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import { Container, Row } from "react-bootstrap"
import SectionForm from "../sections/offers/formOffers"
import SectionOffers from "../sections/offers/listOffers"
import SectionPlacementDialog from "../sections/offers/placementDialog"
import SectionBasket from "../sections/offers/basket"
import Drawer from "../components/dialog/drawer"
import { Transition } from "react-transition-group"
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
export default function Offers() {
  const isMobile = useMedia(992)
  const {
    SHOW_MOBILE_BASKET_IN_OFFERS = false,
    SHOW_MOBILE_FILTER_IN_OFFERS = false,
    onShowMobileBasketInOffers = () => {},
    onShowMobileFilterInOffers = () => {},
  } = useContext(GlobalContext)

  const countTicketInBasket = useCountTickets()

  return (
    <Layout pageInfo={{ pageName: "routes" }}>
      <Container className="my-5 ">
        <Row className="bg-white border-radius shadow-sm rounded mx-0">
          {!isMobile ? <SectionForm /> : null}
          <SectionOffers />
          {!isMobile ? (
            <Transition in={countTicketInBasket > 0} timeout={duration}>
              {state => (
                <SectionBasket
                  transitionStyles={{
                    ...defaultSlideLeft,
                    ...SlideLeft[state],
                  }}
                  isMobile={isMobile}
                />
              )}
            </Transition>
          ) : null}
        </Row>
      </Container>
      <SectionPlacementDialog />
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
            <SectionForm />
          </Drawer>
        </>
      ) : null}
    </Layout>
  )
}
