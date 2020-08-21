import React, { useRef, useEffect } from "react"
import { Card, FormCheck, Row, Col } from "react-bootstrap"
import "./style.scss"
export default function PaySystemCard({
  id = "",
  title = "",
  type = "",
  text = "",
  checked = false,
  img = "/",
  callback = () => {},
}) {
  const formCheckBox = useRef(null)
  const cardChecked = useRef(null)

  useEffect(() => {
    if (checked == true || checked == "true") {
      formCheckBox.current.checked = true
      cardChecked.current.classList.add("active")
      console.log()
    } else {
      formCheckBox.current.checked = false
      cardChecked.current.classList.remove("active")
    }
  }, [checked])
  return (
    <Card ref={cardChecked} onClick={() => callback && callback(id)}>
      <Card.Body>
        <Row className="align-items-center">
          <Col
            lg="1"
            className="d-none"
            style={{ opacity: 0, width: 0, padding: 0 }}
          >
            <FormCheck ref={formCheckBox} />
          </Col>
          <Col xs="2">
            <img src={img} alt="/" style={{ maxHeight: "50px" }} />
          </Col>
          <Col>
            <h5 className="mb-2">{title}</h5>
            <p className="m-0 line-height-14">{text}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
