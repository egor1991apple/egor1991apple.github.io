import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { MdPeople } from "react-icons/md"
import "./style.scss"
export default function index({
  id = null,
  img = null,
  transport = null,
  status = 0,
  all_status = [],
  sizeTransport = null,
  typeTransport = 0,
  description = null,
  rates = [],
  callback = () => {},
}) {
  const selectedRates = rates.find(item => item.checked == true)
  return (
    <Card className="d-flex flex-row flex-wrap  mb-3 align-items-center">
      {all_status.length > 0 &&
        all_status.map(
          ({ id = null, title = "", variant = "" }) =>
            parseInt(id) === status && (
              <div
                key={title}
                className={`bg-${variant} px-2 py-1 status-pay shadow-sm rounded`}
              >
                {title}
              </div>
            )
        )}
      <div className=" col-sm-4 py-3 ">
        <div className="card-img-container ">
          {img && <img src={img} className="img-fluid" />}
        </div>
        <Card.Subtitle className="text-muted justify-content-center w-100">
          <MdPeople className="mr-1" />

          {sizeTransport}
        </Card.Subtitle>
      </div>

      <Card.Body className={" py-3 d-flex flex-column col-sm-8 "}>
        <Card.Title className="d-flex align-items-center mb-0">
          {transport}
        </Card.Title>
        <div className="text-muted">
          {typeTransport == 0 ? "микроавтобус" : "автобус"}
        </div>

        <div className="py-2 mt-2 border-top display-inline">{description}</div>
        {selectedRates != null && typeof selectedRates !== "undefined" ? (
          <div>
            Тариф: {selectedRates.title} - {selectedRates.price}{" "}
            {selectedRates.currency}
          </div>
        ) : null}

        {/* {status == 0 && (
          <div className="ml-auto pt-3 mt-auto">
            <Button
              as={Link}
              variant={
                all_status.find(({ id }) => parseInt(id) == status).variant
              }
              size="sm"
              className="btn-sm text-white"
            >
              Билеты
            </Button>
          </div>
        )} */}
        {status == 1 && (
          <div className="ml-auto pt-3 mt-auto">
            <Button
              as={Link}
              variant={
                all_status.find(({ id }) => parseInt(id) == status).variant
              }
              size="sm"
              className="btn-sm text-white"
            >
              Оплатить
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}
