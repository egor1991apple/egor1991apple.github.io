import React from "react"
import { Form, Col } from "react-bootstrap"
import MaskedInput from "react-text-mask"

export default function BookingForm() {
  return (
    <Form>
      <Form.Row className="mt-3">
        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Откуда <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control
              required
              size="md"
              placeholder="Укажите пункт отпправления"
            />
          </Form.Group>
        </Col>
        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Куда <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control
              required
              size="md"
              placeholder="Укажите пункт прибытия"
            />
          </Form.Group>
        </Col>

        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Дата выезда <sup className="text-danger">*</sup>
            </Form.Label>
            <MaskedInput
              className="form-control"
              placeholder="Укажите дату выезда"
              mask={[
                /[1-9]/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
            />
          </Form.Group>
        </Col>
        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Время выезда <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control
              required
              size="md"
              placeholder="Укажите время выезда"
            />
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  )
}
