import React from "react"
import MainSearchForm from "../../../components/forms/mainSearchForm"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import "./style.scss"
export default function mainSearchFormHorizontal() {
  return (
    <section className="bg-form py-5">
      <Container className="py-5 zIndex ">
        <div className="slider">
          <div className="slider--text">
            <div className="h1">ПУТЕШЕСТВУЙ МНОГО И С УДОВОЛЬСТВИЕМ</div>
            <div className="h2">Поиск и бронирование туров</div>
          </div>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="nav-tab--container">
                <Nav.Item>
                  <Nav.Link eventKey="1">Авиатуры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">Автобусные туры</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Проживание</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">Экскурсии</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5">Трансферы</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <MainSearchForm type={"hor"} />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <MainSearchForm type={"hor"} />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <MainSearchForm type={"hor"} />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <MainSearchForm type={"hor"} />
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <MainSearchForm type={"hor"} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  )
}
