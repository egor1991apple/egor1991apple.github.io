import React, { Fragment } from "react"
import { Col } from "react-bootstrap"
import TicketInfo from "./ticketInfo"
import { BsArrowRight } from "react-icons/bs"

export default function Ticket({ duration, route = [] }) {
  return (
    <Fragment>
      <Col>
        <TicketInfo {...route[0]} />
      </Col>
      <Col
        sm="auto"
        className="p-md-0 d-flex flex-column text-muted line-height-14 py-3"
      >
        <small>В пути: </small>
        <small>
          {duration} <BsArrowRight size="24" />
        </small>
      </Col>
      <Col>
        <TicketInfo {...route[route.length - 1]} />
      </Col>
    </Fragment>
  )
}
