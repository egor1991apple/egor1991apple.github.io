import React, { useContext } from "react"
import { Col, Card } from "react-bootstrap"
import { useGroupBasket } from "../../../hooks/useGroupBasket"
import { MdClose, MdPerson } from "react-icons/md"
import { BsArrowRight } from "react-icons/bs"
import RouteTwoPoints from "../../../components/cards/routeTwoPoints"
import { GlobalContext } from "../../../store/context"
import useMedia from "../../../hooks/useMedia"
import useTotalPriceInBasket from "../../../hooks/useTotalPriceInBasket"
export default function BookingInfo() {
  const {
    BASKET_COMMIT = {},
    onToggleAlert = () => {},
    onSelectDirectionFromBasket = () => {},
    onOpenPlacementDialog = () => {},
    onSavePrevBasket = () => {},
  } = useContext(GlobalContext)

  const result = useGroupBasket()

  const { FROM = null, BACK = null } = result

  const isMobile = useMedia(992)

  const totalCost = useTotalPriceInBasket(BASKET_COMMIT)
  return (
    <Col
      lg="3"
      className={`${!isMobile ? "border-left-dashed ticket-styled big" : " "}`}
    >
      <Card className="border-0 sticky-top">
        {FROM ? (
          <Card.Header className="px-1 bg-header bg-white">
            <div className="text-5">
              {FROM.offers.route[0].city} <BsArrowRight />{" "}
              {FROM.offers.route[FROM.offers.route.length - 1].city}
            </div>
            {FROM && BACK ? (
              <span className="text-muted">туда и обратно</span>
            ) : (
              <span className="text-muted">в одну сторону</span>
            )}
          </Card.Header>
        ) : null}

        {FROM ? (
          <Card.Body className="px-1 d-flex flex-column">
            <MdClose
              size="21"
              className={"cursor ml-auto"}
              onClick={() => {
                onToggleAlert("bookingRemoveDirection")(true)
                onSelectDirectionFromBasket(0)
              }}
            />
            <RouteTwoPoints points={FROM.offers.route} />
            <div className="d-flex align-items-center">
              <MdPerson size="16" className="text-dark mr-1" />{" "}
              {BASKET_COMMIT[0].length} места:{" "}
              {BASKET_COMMIT[0].map(({ place }, index) => (
                <span className="ml-1">
                  {place}
                  {index !== BASKET_COMMIT[0].length - 1 ? ", " : " "}
                </span>
              ))}
              <span
                className="cursor text-danger ml-auto"
                onClick={() => {
                  onSelectDirectionFromBasket(0)
                  onOpenPlacementDialog()
                  onSavePrevBasket()
                }}
              >
                изменить...
              </span>
            </div>
          </Card.Body>
        ) : (
          ""
        )}
        {BACK ? (
          <Card.Body className="px-1 d-flex flex-column border-top">
            <MdClose
              size="21"
              className={"cursor ml-auto"}
              onClick={() => {
                onToggleAlert("bookingRemoveDirection")(true)
                onSelectDirectionFromBasket(1)
              }}
            />
            <RouteTwoPoints points={BACK.offers.route} />
            <div className="d-flex align-items-center">
              <MdPerson size="16" className="text-dark mr-1" />{" "}
              {BASKET_COMMIT[1].length} места:{" "}
              {BASKET_COMMIT[1].map(({ place }, index) => (
                <span className="ml-1">
                  {place}
                  {index !== BASKET_COMMIT[1].length - 1 ? ", " : " "}
                </span>
              ))}
              <span
                className="cursor text-danger ml-auto"
                onClick={() => {
                  onSelectDirectionFromBasket(1)
                  onOpenPlacementDialog()
                  onSavePrevBasket()
                }}
              >
                изменить...
              </span>
            </div>
          </Card.Body>
        ) : (
          ""
        )}
        <Card.Footer className="bg-white text-center text-4">
          Итого: {totalCost.price} {totalCost.cur}
        </Card.Footer>
      </Card>
    </Col>
  )
}
