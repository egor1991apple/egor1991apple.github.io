import React, { useContext } from "react"
import PlacementDialog from "../../../components/dialog/placement"
import Bus from "../../../components/cards/bus"
import { GlobalContext } from "../../../store/context"
import { Row, Col, Table } from "react-bootstrap"
import { useBookingPlace } from "../../../hooks/useBookingPlace"

import { CSSTransition, TransitionGroup } from "react-transition-group"

export default function SectionPlacementDialog() {
  const {
    SELECTED_OFFERS_ID = null,
    OFFERS = [],
    BASKET = [],

    onBasketOffersCommit = () => {},
    onAddBasketItem = () => {},
  } = useContext(GlobalContext)

  let placements = { selected: [], disabled: [], booking: [] }
  const booking = useBookingPlace()
  try {
    placements = { ...OFFERS[SELECTED_OFFERS_ID - 1].placements, booking } || []
  } catch (er) {}

  return (
    OFFERS.length &&
    SELECTED_OFFERS_ID && (
      <PlacementDialog
        callback={onBasketOffersCommit(
          OFFERS[SELECTED_OFFERS_ID - 1].direction
        )}
        disabled={!booking.length && true}
      >
        <Row>
          <Col lg="5" className="d-none d-sm-block">
            <h6>Места посадки</h6>

            <Table striped className="border">
              <thead>
                <tr>
                  <th className="border-right">Автобус</th>
                  <th className="border-right">Пассажир</th>
                  <th>Место</th>
                </tr>
              </thead>

              <TransitionGroup component={"tbody"}>
                {BASKET[OFFERS[SELECTED_OFFERS_ID - 1].direction].length &&
                  BASKET[OFFERS[SELECTED_OFFERS_ID - 1].direction].map(
                    ({ ticket_id, place }, index) => (
                      <CSSTransition
                        key={index + "place"}
                        timeout={300}
                        classNames="fade"
                      >
                        <tr>
                          <td className="border-right"> #{ticket_id}</td>
                          <td className="border-right">
                            Пассажир №{index + 1}
                          </td>
                          <td className="">{place} место</td>
                        </tr>
                      </CSSTransition>
                    )
                  )}
              </TransitionGroup>
            </Table>
          </Col>
          <Col lg="7">
            <h6>Рассадка в автобусе</h6>
            <Bus
              {...placements}
              callback={onAddBasketItem(
                OFFERS[SELECTED_OFFERS_ID - 1].direction
              )}
            />
            <table className="bus-info mt-2">
              <tbody className="d-md-flex ">
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
          </Col>
        </Row>
      </PlacementDialog>
    )
  )
}
