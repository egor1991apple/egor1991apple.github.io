import React, { useContext } from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../../../components/layout"
import Nav from "../../../sections/personal/nav"
import UserImg from "../../../sections/personal/UserImg"
import RentalCard from "../../../components/cards/bus_rental_personal"
import useMedia from "../../../hooks/useMedia"
import SectionMobile from "../../../sections/personal/mobileContainer"
import { GlobalContext } from "../../../store/context"

const CurrentRental = ({ location }) => {
  const isMobile = useMedia(992)
  const { CURRENT_RENTAL = [], ALL_STATUS = [] } = useContext(GlobalContext)
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
            <h3 className="pt-4 pb-3 pt-lg-0">Список текущих аренд</h3>
            {CURRENT_RENTAL.length
              ? CURRENT_RENTAL.map(item => (
                  <RentalCard
                    key={`${item.id}_rental_card`}
                    {...item}
                    all_status={ALL_STATUS}
                  />
                ))
              : null}
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

export default CurrentRental
