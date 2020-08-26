import React, { useRef, useEffect } from "react"
import { Card, FormCheck, Row, Col } from "react-bootstrap"
//import "./style.scss"
export default function RentalTarifCard({
  id = "",
  title = "",
  checked = false,
  callback = () => {},
}) {
  const formCheckBox = useRef(null)
  //const cardChecked = useRef(null)

  useEffect(() => {
    if (checked == true || checked == "true") {
      formCheckBox.current.checked = true
      //cardChecked.current.classList.add("active")
      console.log()
    } else {
      formCheckBox.current.checked = false
      //cardChecked.current.classList.remove("active")
    }
  }, [checked])
  return (
    <Card
      className={"mb-2"}
      //ref={cardChecked}
      onClick={() => callback && callback(id)}
    >
      <Card.Body className="p-2">
        <Row className="align-items-center">
          <Col lg="1">
            <FormCheck ref={formCheckBox} />
          </Col>

          <Col>{title}</Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
