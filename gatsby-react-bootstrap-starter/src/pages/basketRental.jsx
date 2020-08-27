import React, { useContext, useEffect, useMemo } from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"

import SectionRentalInfo from "../sections/booking/bookingInfoRental"
import SectionRental from "../sections/booking/rental"
import SectionBooking from "../sections/booking/booking"
import SectionBuyer from "../sections/booking/buyer"
import SectionTimer from "../sections/booking/sectionTimer"
import SectionMobile from "../sections/booking/mobileContainer"
import SectionPaymentSystem from "../sections/booking/paySystem"
import SectionAgreementDialog from "../components/dialog/agreement"
import SectionPlacementDialog from "../sections/booking/placementDialog"
import { GlobalContext } from "../store/context"
import useMedia from "../hooks/useMedia"

import { navigate } from "gatsby"

export default function Basket({ location }) {
  const {
    BASKET_RENTAL_COMMIT = null,
    onToggleAlert = () => {},
    SHOW_MOBILE_BASKET_BOOKING = false,
    SHOW_MOBILE_BASKET_DETAIL = false,
    onShowMobileBasketDetail = () => {},
    onShowMobileBasketBooking = () => {},
  } = useContext(GlobalContext)

  // const memoBasketBooking = useMemo(() => {
  //   return SHOW_MOBILE_BASKET_BOOKING
  // }, [SHOW_MOBILE_BASKET_BOOKING])
  // useEffect(() => {
  //   // let status = [];
  //   // for (let i = 0; i < 2; i++) {
  //   // 	BASKET_COMMIT[i].length > 0 && status.push(true);
  //   // }
  //   // console.log(status.find((item) => item == true));
  //   // !status.find((item) => item == true) && navigate('/offers');
  // }, [JSON.stringify(BASKET_COMMIT)])

  useEffect(() => {
    onToggleAlert("bookingGreeting")(true)
  }, [])

  const isMobile = useMedia(992)

  return (
    <Layout pageInfo={{ pageName: "basket" }} {...location}>
      <Container className="my-5 ">
        <Row>
          <SectionTimer />
        </Row>
        <Row className="bg-white border-radius shadow-sm rounded mx-0">
          <Col lg="9">
            <SectionBuyer />
            <SectionRental />
            {!isMobile ? <SectionBooking /> : null}
          </Col>

          <SectionRentalInfo />
        </Row>
      </Container>
      {isMobile ? <SectionMobile /> : null}
      <SectionPaymentSystem />
      <SectionAgreementDialog />
      <SectionPlacementDialog />
    </Layout>
  )
}
