import React from "react"
import { Row, Col, Button } from "react-bootstrap"

import Collapse from "../../collapse/ticket-detail"
import RoutePoints from "../routePoints"
import MapDialog from "../../dialog/MapDialog"
import Servises from "../../servises_block"
import Bus from "../bus"
import Passenger from "../passenger"

const ticketDetail = ({
  route = [],
  placements = {},
  place = [],
  passenger = [],
}) => {
  place = place.split(",").map(function(n) {
    return Number(n)
  })

  return (
    <div className="border-top-dashed">
      <Collapse title="Детальная информация">
        <div className="py-3">
          <Row className="border-bottom mb-4 pb-3">
            <Col lg="12">
              <div className="d-flex mb-4">
                <div className="text-6">Пассажиры</div>
              </div>
            </Col>

            {passenger.length > 0 &&
              passenger.map((item, index) => (
                <Col
                  lg="6"
                  className={`${index + 1 != passenger.length ? "mb-3" : " "}`}
                >
                  <Passenger passenger_id={item} />
                </Col>
              ))}
          </Row>

          <Row>
            <Col lg="6" className="border-right  mb-sm-0">
              <div className="d-flex">
                <div className="text-6 mb-3">Маршрут</div>
              </div>
              <RoutePoints points={route} />
              <Button variant="info" className="btn-block" size="sm">
                Cмотреть на карте...
              </Button>
            </Col>
            <Col xs="12" className="d-lg-none">
              <hr />
            </Col>
            <Col lg="6">
              <div className="d-flex mb-4">
                <div className="text-6">Места</div>
              </div>
              <div>
                <Bus {...placements} />
                <table className="bus-info ">
                  <tbody>
                    <tr>
                      <td className="bus-td" />
                      <td>Свободные</td>
                    </tr>
                    <tr>
                      <td className="bus-td bus-td--selected" />
                      <td>Забронированные</td>
                    </tr>
                    <tr>
                      <td className="bus-td bus-td--disabled" />
                      <td>Не доступные</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg="12">
              <div className="d-flex mb-3">
                <div className="text-6">Услуги</div>
              </div>
              <div className="d-flex flex-wrap">
                <Servises />
              </div>
            </Col>
          </Row>
        </div>
      </Collapse>
    </div>
  )
}

export default ticketDetail
