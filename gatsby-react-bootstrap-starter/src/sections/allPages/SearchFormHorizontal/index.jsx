import React from "react"
import MainSearchForm from "../../../components/forms/mainSearchForm"
import { Container, Row, Col, Tabs, Tab, Nav, Card } from "react-bootstrap"
import "./style.scss"
export default function mainSearchFormHorizontal() {
  return (
    <section className="bg-form py-5" id="main-form">
      <Container className="py-5 zIndex">
        <Tabs defaultActiveKey="1" id="form-tabs" variant="pills">
          <Tab eventKey="1" title="Автобусные билеты">
            <div className="my-3">
              <MainSearchForm type={"hor"} />
            </div>
          </Tab>
          <Tab eventKey="2" title="Авиатуры">
            <div className="my-3">
              <MainSearchForm type={"hor"} />
            </div>
          </Tab>
          <Tab eventKey="3" title="Шоптуры">
            <div className="my-3">
              <MainSearchForm type={"hor"} />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </section>
  )
}
