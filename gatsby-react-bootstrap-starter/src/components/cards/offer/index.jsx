import React, { Fragment } from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
import Ticket from "./ticket"
import TicketDetail from "./ticketDetail"
import "./style.scss"

export default function Offer({
  id = null,
  cost = null,
  currency = null,
  link = null,
  callback = null,
  inPay = false,

  ...ticket
}) {
  return (
    <Card className="bg-light-1 mx-auto">
      <Card.Body className="p-0 ">
        <Row noGutters>
          <Col sm="9" md="10" className="flex-grow-1 d-flex flex-column">
            <Row className={`py-3 mt-auto mx-0`}>
              {/* <Col lg="auto" className="my-auto">
								<h5>#{id}</h5>
							</Col> */}
              <Ticket {...ticket} />
            </Row>
            <TicketDetail {...{ ...ticket, id }} />
          </Col>
          {!inPay && (
            <Col
              xs="12"
              sm="3"
              md="2"
              className="ticket-styled    px-3 py-1 d-flex  flex-column   line-height-14 "
            >
              <div className="sticky-top pb-1" style={{ top: "1rem" }}>
                <div className="border-bottom pb-1">
                  <small>Мест:</small>
                  <div>6 свободных</div>
                </div>
                <div className=" py-1">
                  <small>Цена:</small>
                  <div className="text-5 text-danger">
                    {cost} {currency}
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  className="btn-block btn-sm text-nowrap"
                  onClick={() => callback(id)}
                >
                  Выбрать
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  )
}
