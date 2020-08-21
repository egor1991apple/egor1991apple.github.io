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
              Имя <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control required size="md" placeholder="Ваше имя" />
          </Form.Group>
        </Col>
        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Фамилия <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control required size="md" placeholder="Ваша фамилия" />
          </Form.Group>
        </Col>
        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Отчество <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control required size="md" placeholder="Ваше отчество" />
          </Form.Group>
        </Col>
        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Пасспорт <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control required size="md" placeholder="Номер пасспорта" />
          </Form.Group>
        </Col>
        <Col lg="4">
          <Form.Group>
            <Form.Label>
              Дата рождения <sup className="text-danger">*</sup>
            </Form.Label>
            <MaskedInput
              className="form-control"
              placeholder="Дата рождения"
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
              Гражданство <sup className="text-danger">*</sup>
            </Form.Label>
            <Form.Control required size="md" as="select" custom>
              <option>Республика беларусь</option>
              <option>Российская федерация</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  )
}
