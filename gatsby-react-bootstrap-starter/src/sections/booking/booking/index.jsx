import React, { useContext } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { useMaxPlacements } from "../../../hooks/useMaxPlacements"

import BookingFormBuyer from "../../../components/forms/booking/buyer"
import { GlobalContext } from "../../../store/context"
import useMedia from "../../../hooks/useMedia"

export default function Buyer() {
  const {
    onShowPaymentSytemDialog = () => {},
    onToggleAgreementDialog = () => {},
  } = useContext(GlobalContext)

  const isMobile = useMedia(992)

  return (
    <Card className={`border-0 mt-0 mt-lg-4 ${isMobile ? "h-100" : " "}`}>
      <Card.Body
        className={` ${
          !isMobile ? "border rounded bg-light-3 mb-4 p-4" : " "
        } `}
      >
        <div className="text-6 mb-3 pb-2 d-flex border-bottom">
          К оплате: <span className="text-danger ml-auto">200 USD</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sed
          alias, labore minus numquam amet possimus inventore quisquam iusto
          obcaecati aliquam aspernatur eveniet saepe dicta sint ea architecto
          nobis quod.
        </p>
        <div className="pb-3">
          <Form.Group controlId="formBasicCheckbox" className="d-flex mb-0">
            <Form.Check type="checkbox" />
            <Form className="Labl">
              Я принимаю{" "}
              <u
                className="cursor text-warning text-underline"
                onClick={onToggleAgreementDialog(0)}
              >
                условия пользовательского соглашения
              </u>{" "}
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Form>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className="d-flex mb-0">
            <Form.Check type="checkbox" />
            <Form className="Labl">
              Я даю{" "}
              <u
                className="cursor text-warning"
                onClick={onToggleAgreementDialog(1)}
              >
                согласие на обработку пользовательских данных
              </u>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Form>
          </Form.Group>
        </div>
        {!isMobile ? (
          <Button
            variant="danger"
            className="btn-block"
            onClick={onShowPaymentSytemDialog}
          >
            К оплате
          </Button>
        ) : null}
      </Card.Body>
      {isMobile ? (
        <Card.Footer>
          <Button
            variant="danger"
            className="btn-block"
            onClick={onShowPaymentSytemDialog}
          >
            К оплате
          </Button>
        </Card.Footer>
      ) : null}
    </Card>
  )
}
