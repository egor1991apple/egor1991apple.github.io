import React from "react"
import { Card, Table, Button } from "react-bootstrap"
import { MdPeople } from "react-icons/md"
import "./style.scss"
export default function index({
  id = null,
  img = null,
  transport = null,
  sizeTransport = null,
  typeTransport = 0,

  rates = [],
  callback = () => {},
}) {
  const selectedRates = rates.find(item => item.checked == true)

  return (
    <Card className="d-flex flex-column border-0 flex-wrap overflow-hidden mb-3 align-items-center">
      <div className="">
        <div className="card-img-container ">
          {img && <img src={img} className="img-fluid" />}
        </div>
      </div>

      <Card.Body className={" d-flex flex-column  p-0 w-100"}>
        <Card.Title className="d-flex align-items-center mb-0">
          {transport}
        </Card.Title>
        <div className="text-muted">
          {typeTransport == 0 ? "микроавтобус" : "автобус"}
        </div>

        <div className="pt-2 mt-2 border-top display-inline">
          Вместимость: {sizeTransport}
        </div>

        {selectedRates != null && typeof selectedRates !== "undefined" ? (
          <div>
            Тариф: {selectedRates.title} - {selectedRates.price}{" "}
            {selectedRates.currency}
          </div>
        ) : null}
      </Card.Body>
    </Card>
  )
}
