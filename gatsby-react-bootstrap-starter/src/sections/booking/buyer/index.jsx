import React, { useContext } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { useMaxPlacements } from "../../../hooks/useMaxPlacements"

import BookingFormBuyer from "../../../components/forms/booking/buyer"
import { GlobalContext } from "../../../store/context"

export default function Buyer() {
  const {
    onShowPaymentSytemDialog = () => {},
    onToggleAgreementDialog = () => {},
  } = useContext(GlobalContext)
  return (
    <Card className={`border-0 mt-4`}>
      <Card.Body className="px-0 px-lg-3 border-bottom">
        <div className="text-6 mb-3">Информация о покупателе</div>
        <p className="text-dark line-height-14 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nulla molestias quibusdam corrupti temporibus, quidem ducimus quis ut
          sapiente doloribus quasi recusandae obcaecati cum harum? A nobis esse
          excepturi! Repudiandae?
        </p>
        <BookingFormBuyer />
      </Card.Body>
    </Card>
  )
}
