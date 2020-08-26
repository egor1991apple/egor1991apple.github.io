import React from "react"
import { Card, Table, Button } from "react-bootstrap"
import { MdPeople } from "react-icons/md"
import "./style.scss"
export default function index({
  id = null,
  img = null,
  transport = null,
  pricePerHour = null,
  pricePerKm = null,
  worldPricePerKm = null,
  sizeTransport = null,
  typeTransport = 0,
  description = null,
  currency = null,
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
        <table className="table-price">
          <thead>
            <tr>
              <th>Город, руб/час</th>
              <th>Город, руб/км</th>
              <th>Международные, руб/км*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {pricePerHour} {currency}
              </td>
              <td>
                {pricePerKm} {currency}
              </td>
              <td>
                {worldPricePerKm} {currency}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="ml-auto pt-3 mt-auto">
          <Button size="sm">Бронировать</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
