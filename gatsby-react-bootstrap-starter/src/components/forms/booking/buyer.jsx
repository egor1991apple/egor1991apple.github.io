import React from "react"
import { Form, Col } from "react-bootstrap"
import MaskedInput from "react-text-mask"
export default function BookingForm() {
  return (
    <Form>
      <Form.Row className="mt-3">
        <Col lg="6">
          <Form.Group>
            <Form.Label>Имя</Form.Label>
            <Form.Control size="md" placeholder="Ваше имя" />
          </Form.Group>
        </Col>
        <Col lg="6">
          <Form.Group>
            <Form.Label>Номер телефона</Form.Label>
            <MaskedInput
              className="form-control"
              placeholder="Номер телефона"
              mask={[
                "(",
                /[1-9]/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
            />
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  )
}
