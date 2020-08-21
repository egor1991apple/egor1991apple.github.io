import React, { Fragment } from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
import { BsTrash } from "react-icons/bs"
import Ticket from "./ticket"
import TicketDetail from "./ticketDetail"
import { Link } from "gatsby"
import "./style.scss"
export default function Offer({
  id = null,
  totalCost = null,
  currency = null,
  link = null,
  status = 1,
  ticket_id = null,
  place = null,
  all_status = [],
  onDelete = () => {},
  ...ticket
}) {
  return (
    <Card className="bg-light-1 mx-auto my-4">
      {all_status.length > 0 &&
        all_status.map(
          ({ id = null, title = "", variant = "" }) =>
            parseInt(id) === status && (
              <div
                key={title}
                className={`bg-${variant} px-2 py-1 status-pay shadow-sm rounded`}
              >
                 №{ticket_id} / {title}
              </div>
            )
        )}
      {status == 0 || status == 1 ? (
        <Button
          variant="danger"
          className="delete-button p-0 rounded-circle"
          onClick={() => onDelete(true)}
        >
          <BsTrash className="cursor text-white m-auto" size="18" />
        </Button>
      ) : null}

      <Card.Body className="p-0 ">
        <Row noGutters>
          <Col sm="9" md="10" className="flex-grow-1 d-flex flex-column pt-3">
            <Row className={`py-3 mt-auto mx-0`}>
              <Ticket {...ticket} />
            </Row>
            <TicketDetail {...{ ...ticket, id }} place={place} />
          </Col>

          <Col
            xs="12"
            sm="3"
            md="2"
            className="ticket-styled    px-3 py-1 d-flex  flex-column   line-height-14 "
          >
            {" "}
            <div className="sticky-top pb-1 " style={{ top: "1rem" }}>
              <div className="border-bottom pb-1">
                <small>Места:</small>
                <div>{place}</div>
              </div>
              <div className=" py-1">
                <small>Цена:</small>
                <div className="text-5 text-danger">
                  {totalCost} {currency}
                </div>
              </div>
              {status == 0 && (
                <Button
                  as={Link}
                  variant={
                    all_status.find(({ id }) => parseInt(id) == status).variant
                  }
                  size="sm"
                  className="btn-block btn-sm text-white"
                >
                  Билеты
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
