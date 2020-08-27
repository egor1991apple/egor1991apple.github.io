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
  description = null,
  rates = [],
  callback = () => {},
}) {
  return (
    <Card className="d-flex flex-row flex-wrap overflow-hidden mb-3 align-items-center">
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
        {rates.length > 0 ? (
          <table className="table-price">
            <thead>
              <tr>
                {rates.map(({ title = null, id = null }) => (
                  <th key={`${id}_rate_th`}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {rates.map(({ price = null, id = null, currency = null }) => (
                  <td key={`${id}_rate_td`}>
                    {price} {currency}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ) : null}

        <div className="ml-auto pt-3 mt-auto">
          <Button size="sm" onClick={callback}>
            Бронировать
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
