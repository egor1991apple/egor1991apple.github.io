import React from "react"
import { Form, Button, Col } from "react-bootstrap"
export default function FormPromoCode() {
  return (
    <Form>
      <Form.Row className="mx-0">
        <Col xs="auto" className="px-0">
          <Form.Control className="mb-2" placeholder="Промокод" />
        </Col>
        <Col className="px-0">
          <Button className="btn-block px-0">Ok</Button>
        </Col>
      </Form.Row>
    </Form>
  )
}
