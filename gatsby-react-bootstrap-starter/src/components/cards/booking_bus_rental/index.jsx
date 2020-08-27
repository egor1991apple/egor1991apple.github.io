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

        {selectedRates != null && typeof selectedRates == "undefined" ? (
          <div>
            Тариф: {selectedRates.title} - {selectedRates.price}{" "}
            {selectedRates.currency}
          </div>
        ) : null}

        {/* {rates.length > 0 ? (
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
        ) : null} */}

        {/* <div className="ml-auto pt-3 mt-auto">
          <Button size="sm" onClick={callback}>
            Бронировать
          </Button>
        </div> */}
      </Card.Body>
    </Card>
  )
}
