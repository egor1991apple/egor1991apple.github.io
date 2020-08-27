import React from "react"
import { Form, Button, Col } from "react-bootstrap"
export default function FormPromoCode() {
  return (
    <Form>
      <Form.Row className="mx-0">
        <Col className="px-0">
          <Form.Control
            className="mb-0 h-100"
            size="sm"
            placeholder="Промокод"
          />
        </Col>
        <Col xs="auto" className="px-0">
          <Button size="sm" className="btn-block px-3">
            Ok
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}
