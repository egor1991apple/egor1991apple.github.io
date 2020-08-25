import React from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
import Layout from "../../../components/layout"
import Nav from "../../../sections/personal/nav"
import UserImg from "../../../sections/personal/UserImg"
import UserInfo from "../../../sections/personal/userInfo"
import LoginInfo from "../../../sections/personal/loginInfo"

import useMedia from "../../../hooks/useMedia"
import SectionMobile from "../../../sections/personal/mobileContainer"
const UserInfoPage = ({ location }) => {
  const isMobile = useMedia(992)
  return (
    <Layout pageInfo={{ pageName: "personal/userinfo" }} {...location}>
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
          <Col className="p-4">
            <Form>
              <UserInfo />
              <LoginInfo />

              <Button variant="danger" className="btn-block mt-4">
                Сохранить
              </Button>
            </Form>
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

export default UserInfoPage
