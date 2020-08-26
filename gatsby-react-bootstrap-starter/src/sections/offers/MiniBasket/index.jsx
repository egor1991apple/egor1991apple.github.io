import React, { useContext } from "react"
import "./style.scss"
import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { GlobalContext } from "../../../store/context"
import SlideBottom from "../../../components/animation/slideBottom"
import { useCountTickets } from "../../../hooks/useCountTickets"
import { GrTicket } from "react-icons/gr"
import { MdClose } from "react-icons/md"

const MobileControl = () => {
  const {
    onShowMobileBasketInOffers = () => {},
    onShowMobileFilterInOffers = () => {},
    onRemoveBaksetItem = () => {},
    BASKET = [],
  } = useContext(GlobalContext)

  const FROM = BASKET[0] || []
  const BACK = BASKET[1] || []

  const count = useCountTickets()

  return (
    <div className="miniBasket">
      <SlideBottom open={count > 0}>
        <Container className="">
          <Row className="py-3 align-items-center bg-light-3  mx-0 rounded shadow border">
            {FROM.length ? (
              <Col className="border-right">
                <div className="text-3 text-dark"> Билеты туда</div>
                <div
                  className="d-flex mt-2 border-top pt-3"
                  style={{ minHeight: 60 }}
                >
                  {FROM.map(({ ticket_id = null, status }, index) => {
                    if (status == 1) {
                      return (
                        <Card className="mr-3 ">
                          <Card.Body className="p-0 d-flex ">
                            <div className="py-2 px-3 border-right-dashed">
                              <GrTicket className="" size="18" />{" "}
                            </div>
                            <div className="py-2 px-3"> № {ticket_id}</div>
                            <div
                              onClick={() => onRemoveBaksetItem(0)(ticket_id)}
                              className={"cursor bg-danger deleteBtn"}
                            >
                              <MdClose className="text-white" size="18" />
                            </div>
                          </Card.Body>
                        </Card>
                      )
                    } else {
                      return null
                    }
                  })}
                </div>
              </Col>
            ) : null}

            {BACK.length ? (
              <Col className="border-right">
                <div className="text-3 text-dark"> Билеты обратно</div>
                <div
                  className="d-flex mt-2 border-top pt-3"
                  style={{ minHeight: 60 }}
                >
                  {BACK.map(({ ticket_id = null, status }, index) => {
                    if (status == 1) {
                      return (
                        <Card className="mr-3 ">
                          <Card.Body className="p-0 d-flex ">
                            <div className="py-2 px-3 border-right-dashed">
                              <GrTicket className="" size="18" />{" "}
                            </div>
                            <div className="py-2 px-3"> № {ticket_id}</div>
                            <div
                              onClick={() => onRemoveBaksetItem(1)(ticket_id)}
                              className={"cursor bg-danger deleteBtn"}
                            >
                              <MdClose className="text-white" size="18" />
                            </div>
                          </Card.Body>
                        </Card>
                      )
                    } else {
                      return null
                    }
                  })}
                </div>
              </Col>
            ) : null}

            <Col xs="auto" className="ml-auto">
              <div className="text-3 text-dark"> Итого:</div>
              <Button
                className="mt-2"
                variant="danger"
                size=""
                disabled={count == 0}
                onClick={onShowMobileBasketInOffers}
              >
                В корзину
              </Button>
            </Col>
          </Row>
        </Container>
      </SlideBottom>
    </div>
  )
}

export default MobileControl
