import React from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
import Layout from "../../../components/layout"
import Nav from "../../../sections/personal/nav"
import UserImg from "../../../sections/personal/UserImg"
import { Link } from "gatsby"
import useMedia from "../../../hooks/useMedia"
import SectionMobile from "../../../sections/personal/mobileContainer"
const CurrentOffers = ({ location }) => {
  const isMobile = useMedia(992)
  return (
    <Layout pageInfo={{ pageName: "personal/historyoffers" }} {...location}>
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
          <Col className="p-4 text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-danger text-center ">
              Вы еще не совершили <br />
              не одной поездки
            </h1>
            <Button as={Link} to={"/offers"} variant={"danger"}>
              К предложениям
            </Button>
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
