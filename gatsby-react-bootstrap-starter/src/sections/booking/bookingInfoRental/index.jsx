import React, { useContext } from "react"
import { Col } from "react-bootstrap"
import BookingRentalCard from "../../../components/cards/booking_bus_rental"
import { GlobalContext } from "../../../store/context"

export default function BookingInfoRental() {
  const { BASKET_RENTAL_COMMIT = {} } = useContext(GlobalContext)
  const isMobile = false
  return (
    <Col
      lg="3"
      className={`${!isMobile ? "border-left-dashed ticket-styled big" : " "}`}
    >
      <BookingRentalCard {...BASKET_RENTAL_COMMIT} />
    </Col>
  )
}
