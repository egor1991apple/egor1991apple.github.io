import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../../../components/layout"
import Nav from "../../../sections/personal/nav"
import UserImg from "../../../sections/personal/UserImg"
import Offers from "../../../sections/personal/offers"
import useMedia from "../../../hooks/useMedia"
import SectionMobile from "../../../sections/personal/mobileContainer"

const CurrentOffers = ({ location }) => {
  const isMobile = useMedia(992)
  return (
    <Layout pageInfo={{ pageName: "personal/current" }} {...location}>
      <Container className="my-5 ">
        <Row className="bg-white border-radius shadow rounded mx-0">
          {!isMobile ? (
            <Col lg="3" className="border-right px-0">
              <div className="sticky-top d-flex flex-column py-3">
                <UserImg />
                <Nav />
              </div>
            </Col>
          ) : null}

          <Col className="p-lg-4">
            <h3 className="pt-4 pb-3 pt-lg-0">Список текущих поездок</h3>
            <Offers />
          </Col>
        </Row>
      </Container>
      {isMobile ? (
        <SectionMobile>
          <div className="d-flex flex-column py-3">
            <UserImg />
            <Nav />
          </div>
        </SectionMobile>
      ) : null}
    </Layout>
  )
}

export default CurrentOffers
