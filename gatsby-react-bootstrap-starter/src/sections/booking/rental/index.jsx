import React, { useContext } from "react"
import { Card } from "react-bootstrap"

import BookingFormRental from "../../../components/forms/booking/rental"
import { GlobalContext } from "../../../store/context"
export default function PassengerList() {
  const {
    //onToggleAlert = () => {},
    //onSelectPassengerId = () => {},
  } = useContext(GlobalContext)

  return (
    <Card className={`border-0`}>
      <Card.Body className={"border-bottom px-0 px-lg-3"}>
        <div className="text-6 mb-3 d-flex">Маршрут</div>
        <p className="text-dark line-height-14 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nulla molestias quibusdam corrupti temporibus, quidem ducimus quis ut
          sapiente doloribus quasi recusandae obcaecati cum harum? A nobis esse
          excepturi! Repudiandae?
        </p>
        <BookingFormRental />
      </Card.Body>
    </Card>
  )
}
//
